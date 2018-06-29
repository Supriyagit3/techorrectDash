provider "aws" {
  region     = "us-east-2"
}

resource "aws_instance" "dashboard" {
  ami           = "ami-8c122be9" # Amazon Linux 2 AMI (HVM), SSD Volume Type
  instance_type = "t2.micro"
  vpc_security_group_ids = ["sg-5b9d2730", "sg-414cef2b", "sg-aa41e2c0"] # techorrect ssh dev, dashboard (http/s), mongodb
  key_name = "techorrectAdmin"

  tags {
    Name = "Dashboard"
  }
}

resource "aws_lb" "web-lb" {
  name = "dashboard-lb"
  load_balancer_type = "application"
  security_groups    = ["sg-414cef2b"]

  subnets = ["subnet-d6228abe","subnet-f15ab98b","subnet-7d3b1e30"]
}

resource "aws_lb_listener" "web-lb-listener" {
  load_balancer_arn = "${aws_lb.web-lb.arn}"
  port = "443"
  protocol = "HTTPS"
  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = "arn:aws:acm:us-east-2:943161218049:certificate/7d0b4d31-708a-4651-bdc5-7ba803085714"

  default_action {
    target_group_arn = "${aws_lb_target_group.web-lb-target-group.arn}"
    type             = "forward"
  }
}

resource "aws_lb_target_group" "web-lb-target-group" {
  name     = "dashboard-lb-target-group"
  port     = 80
  protocol = "HTTP"
  vpc_id   = "${var.vpc_id}"
}

resource "aws_lb_target_group_attachment" "web-lb-target-group-attachment" {
  target_group_arn = "${aws_lb_target_group.web-lb-target-group.arn}"
  target_id        = "${aws_instance.dashboard.id}"
  port             = 80
}

resource "aws_lb_listener" "web-backend-lb-listener" {
  load_balancer_arn = "${aws_lb.web-lb.arn}"
  port = "3000"
  protocol = "HTTPS"
  ssl_policy = "ELBSecurityPolicy-2016-08"
  certificate_arn = "arn:aws:acm:us-east-2:943161218049:certificate/7d0b4d31-708a-4651-bdc5-7ba803085714"

  default_action {
    target_group_arn = "${aws_lb_target_group.web-backend-lb-target-group.arn}"
    type             = "forward"
  }
}

resource "aws_lb_target_group" "web-backend-lb-target-group" {
  name     = "backend-lb-target-group"
  port     = 3000
  protocol = "HTTP"
  vpc_id   = "${var.vpc_id}"
}

resource "aws_lb_target_group_attachment" "web-backend-lb-target-group-attachment" {
  target_group_arn = "${aws_lb_target_group.web-backend-lb-target-group.arn}"
  target_id        = "${aws_instance.dashboard.id}"
  port             = 3000
}

data "aws_route53_zone" "selected" {
  name         = "techorrect.com."
}

resource "aws_route53_record" "dashboard" {
  zone_id = "${data.aws_route53_zone.selected.zone_id}"
  name    = "dashboard.${data.aws_route53_zone.selected.name}"
  type    = "A"

  alias {
    name                   = "${aws_lb.web-lb.dns_name}"
    zone_id                = "${aws_lb.web-lb.zone_id}"
    evaluate_target_health = true
  }
}

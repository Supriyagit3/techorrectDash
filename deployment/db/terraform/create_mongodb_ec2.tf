terraform {
  backend "s3" {
  region    = "us-east-2"
  bucket    = "techorrect-terraform-state"
  key       = "techorrect-dashboard-mongodb-tfstate"
  dynamodb_table = "techorrect-tfstate-lock"
  }
}

provider "aws" {
  region     = "us-east-2"
}

resource "aws_instance" "mongodb" {
  ami           = "ami-23291446" # Amazon Linux AMI 2018.03.0.20180508 x86_64 HVM EBS
  instance_type = "t2.micro"
  vpc_security_group_ids = ["sg-5b9d2730", "sg-aa41e2c0", "sg-3942f852"] # ssh, mongoDB, concourse for testing
  key_name = "techorrectAdmin"

  tags {
    Name = "${var.ENVIRONMENT}-mongodb"
  }
}

output "instance-dns" {
  value = "${aws_instance.mongodb.public_dns}"
}

output "instance-private-ip" {
  value = "${aws_instance.mongodb.private_ip}"
}

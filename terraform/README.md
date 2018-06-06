# vault-terraform

This spins up a Vault EC2 VM that connects to the Techorrect postgres backend.  You will need to have the certificates for vault.techorrect.com on your local machine.

1.  Install [Terraform](https://www.terraform.io/intro/getting-started/install.html) on your local computer.
2.  Set up your AWS credentials using [~/.aws/credentials](https://aws.amazon.com/blogs/security/a-new-and-standardized-way-to-manage-credentials-in-the-aws-sdks/)
3.  Create a terraform.tfvars file.  Populate the file with all variables that do not have defaults in variables.tf
4.  Run the following to start the terraform process:
    *  terraform init
    *  terraform apply

Note that after Vault starts up, you will need to manually unseal the Vault before it can be used.  Check the usual spot for the unseal key.

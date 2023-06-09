terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.0.0"
    }
  }
}

module "iam_iam-user" {
  source  = "terraform-aws-modules/iam/aws//modules/iam-user"
  version = " > 3.0.0"
  name = "Raghav"
}

# Official Documentation:- https://registry.terraform.io/modules/terraform-aws-modules/iam/aws/latest/submodules/iam-user?tab=inputs
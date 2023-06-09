// TODO: Add your terraform code!

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }
}

#################################################
# Provider Configuration
#################################################

provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "myBucket" {
  bucket = "rishi-test-440del0me0"
  tags = {
    Name                  = "My bucket"
    Environment           = "Dev"
    TerraformSourceModule = "rishi-test"
  }
}






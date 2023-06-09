#this file is used to configure provider reltaed configs

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "0.0.0"
    }
  }
}

provider "aws" {
  region     = "eu-east-1"
  access_key = "YOUR_AWS_ACCESS_KEY"
  secret_key = "YOUR_AWS_SECRET_KEY"
}

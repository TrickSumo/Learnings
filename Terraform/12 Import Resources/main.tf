# If some respource is not already part of terraform configs (like created manually), we can still import and 
# make it part of terraform config useing terraform import command

# Steps:-
# 1. Import details of resource in terraform in state
# 2. Inspect state and create resource block for it in terrafoprm configs

#  terraform import aws_instance.webServer <use-instance-id-from-aws-console>

resource "aws_instance" "webServer" {
  // inspect terraform state and put details here
}
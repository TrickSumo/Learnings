# Provisioner => allow you to execute scripts or commands on a remote resource after it has been created or updated. 
# Provisioners are used to perform tasks that cannot be achieved through Terraform's native resource management 
# capabilities, such as installing software, configuring applications, or running initialization scripts.

# There are thrree types of terraform provisioner
# File  - to transfer file
# local-ex - to run command locally
# remote-exec - to run command on server


resource "aws_instance" "myServer" {
  ami           = "amazon-machine-image-id"
  instance_type = "t3a.micro"
}

resource "aws_eip" "elasticIP" {
  instance = aws_instance.myServer.id
  provisioner "local-exec" {
    command = "echo ${aws_eip.elasticIP.public_dns} >> /root/myServer_public_dns.txt"
  }
}

    # Local-exec provisioner: This provisioner executes a command on the machine running Terraform, which is typically your local development machine or a build server. It is useful for running scripts or commands locally that are needed to set up or configure resources.

    # Remote-exec provisioner: This provisioner connects to a resource over SSH or WinRM and executes commands on the remote machine. It is commonly used for running configuration management tools, executing shell scripts, or performing post-deployment tasks on the provisioned resource.

    # File provisioner: With this provisioner, you can upload files or directories to a remote resource after its creation. It is often used to transfer configuration files, certificates, or other artifacts required for the proper functioning of the resource.

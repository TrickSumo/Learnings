resource "aws_iam_user" "myUser" {
    name = "s3-dev"
  }

# we can also create users by iterating over input array - for multiple users

resource "aws_iam_user" "myUsers" {
    count = length(var.users)
    name = var.users[index]
  }
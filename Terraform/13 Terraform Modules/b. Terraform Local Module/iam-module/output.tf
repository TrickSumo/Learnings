output "arn" {
  value = aws_iam_user.myUser.arn
}

output "name" {
  value = aws_iam_user.myUser.name
}

output "tags" {
  value = aws_iam_user.myUser.tags
}

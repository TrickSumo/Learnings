resource "aws_dynamodb_table" "myTable" {
  name         = "resume-records"
  billing_mode = "PROVISIONED"
  hash_key     = "UserId"

  attribute {
    name = "UserId"
    type = "N"
  }

  attribute {
    name = "email"
    type = "S"
  }

}

resource "aws_dynamodb_table_item" "tableData" {
  table_name = aws_dynamodb_table.myTable.name
  hash_key   = aws_dynamodb_table.myTable.hash_key
  item = <<EOF
 {
  "UserID": {"N": "123456"},
  "email": {"S": "hello@example.com"},
}
EOF
}

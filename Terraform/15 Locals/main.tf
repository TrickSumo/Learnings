locals {
  file_name_data = split(",", var.data)
}

output "oo" {
  value = local.file_name_data
}

resource "local_file" "myFiles" {
  count = length(local.file_name_data)
  filename = local.file_name_data[count.index]
  content = local.file_name_data[count.index]
}
resource "local_file" "my-file" {
  filename = var.filename[count.index]
  count    = length(var.filename)
  content  = "test"
}


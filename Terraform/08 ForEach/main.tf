#for_each does not accept list in terraform. It accepts only map
#The given "for_each" argument value is unsuitable: the "for_each" argument must be a map, or set of strings, and you have provided a value of type tuple.

resource "local_file" "my-file-1" {
  filename = each.value
  for_each = var.filename
  content  = "test"
}

resource "local_file" "my-file-2" {
  filename = each.value
  for_each = toset(var.filename2)
  content  = "test2"
}

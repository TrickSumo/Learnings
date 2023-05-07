data "local_file" "my-file" {
  filename = "./hello.txt"
}

resource "local_file" "my-file2" {
  filename = "new.txt"
  content  = data.local_file.my-file.content
}

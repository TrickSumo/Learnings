#BlockName is resource
#ResourceType is local_file. Where provider = local and resource = file
#ResourceName (logical name) is my-file

resource "local_file" "my-file" {
  filename = "test.txt"
  content  = "Hello World!"
}

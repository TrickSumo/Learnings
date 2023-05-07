resource "local_file" "my-pet-data-file" {
  filename   = "pets"
  content    = "pets data"
  depends_on = [random_pet.my-pet]
}

resource "random_pet" "my-pet" {
  prefix    = "Mr"
  separator = "."
  length    = 3
}

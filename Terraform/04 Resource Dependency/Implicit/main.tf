resource "local_file" "my-pet-data-file" {
  filename = "${random_pet.my-pet.id}'s data.txt" # ${random_pet.my-pet.id} is reference expression
  content  = "${random_pet.my-pet.id} is my favourite pet"
}

resource "random_pet" "my-pet" {
  prefix    = "Mr"
  separator = "."
  length    = 3
}

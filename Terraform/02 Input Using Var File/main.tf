#BlockName is resource
#ResourceType is random_pet. Where provider = random and resource = pet
#ResourceName (logical name) is my-pet 

resource "random_pet" "my-pet" {
  prefix    = var.prefix
  separator = var.separator
  length    = var.length
}

output "pet-name" {
  value       = random_pet.my-pet
  description = "My doggo is my best friend!"
}

#Can be accessed as "terraform output" or "terraform output pet-name"

module "iam-user" { //its not necessary that module name here and module folder name match
  source = "./iam-module"
  username = "Raghav" // This will be passed as input of module
}

// output of module can be accessed as follows:-
resource "local_file" "user_details" {
  filename = "userData.txt"
  content = "User ${module.iam-user.name} created with arn ${module.iam-user.arn}"
}
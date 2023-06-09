resource "local_file" "name" {
  filename = lookup(var.name_data, var.owner?"admin":"not_admin")
  content = var.owner?"admin":"not_admin"
}
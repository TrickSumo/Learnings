variable "name_data" {
  type = map(any)
  default = {
    "admin"    = "admin"
    "not_admin" = "not_admin"
  }
}
variable "owner" {
  type =  bool
  default = false
  }

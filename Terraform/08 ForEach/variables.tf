variable "filename" {
  type    = set(string)
  default = ["a.txt", "b.txt", "c.txt"]
}

variable "filename2" {
  default = ["g.txt", "h.txt", "i.txt"]
}


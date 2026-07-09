variable "project_name" {
  type    = string
  default = "twitch-clone"
}

variable "location" {
  type    = string
  default = "southafricanorth"
}

variable "vm_size" {
  type    = string
  default = "Standard_B2ms"
}

variable "admin_username" {
  type    = string
  default = "azureuser"
}

variable "ssh_public_key_path" {
  type    = string
  default = "~/.ssh/id_rsa.pub"
}

variable "ssh_source_ip" {
  type    = string
  default = "*"
}

variable "tags" {
  type = map(string)
  default = {
    project    = "twitch-clone"
    managed_by = "terraform"
  }
}
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {
  host = "unix:///Users/guodong.chen/.docker/run/docker.sock"
}

resource "docker_image" "kali" {
  name         = "kalilinux/kali-rolling"
  keep_locally = true
}

resource "docker_container" "kalilinux" {
  image = docker_image.kali.image_id
  name  = "mylinux"
  ports {
    internal = 80
    external = 8000
  }
}


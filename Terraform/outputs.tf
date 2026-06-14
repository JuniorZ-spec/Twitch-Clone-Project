output "vm_public_ip" {
  value = azurerm_public_ip.main.ip_address
}

output "ssh_command" {
  value = "ssh ${var.admin_username}@${azurerm_public_ip.main.ip_address}"
}

output "rtmp_ingest_url" {
  value = "rtmp://${azurerm_public_ip.main.ip_address}:1935/live"
}

output "hls_stream_url" {
  value = "http://${azurerm_public_ip.main.ip_address}:8080/live/stream.m3u8"
}
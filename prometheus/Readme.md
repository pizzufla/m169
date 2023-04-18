# Prometheus
Installation mit Docker Engine auf Linux
## Docker Engine Konfiguration
Im Verzeichnis der Linux VM sind folgende Anpassungen in der Datei **daemon.json** nötig.
### Konfiguration in daemon.json
    {
        "metrics-addr" : "127.0.0.1:9323",
        "experimental": true
    }
### Docker daemon neu starten
    systemctl restart docker.service

### Anpassung ermöglicht die Abfrage der DAten aus der Docker Engine
    curl localhost:9323/metrics
# Prometheus
Installation mit Docker Engine auf Linux
## Docker Engine Konfiguration
Im Verzeichnis der Linux VM sind folgende Anpassungen in der Datei **daemon.json** nötig.
### Konfiguration in daemon.json
    {
        "metrics-addr" : "0.0.0.0:9323"
    }
### Docker daemon neu starten
    systemctl restart docker.service

### Anpassung ermöglicht die Abfrage der Daten aus der Docker Engine
    curl <ip_vmdebian>:9323/metrics

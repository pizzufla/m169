# Prometheus
https://prometheus.io zeichnet Metriken auf, also zum Beispiel in Serien von Daten, in Abhängigkeit zur Zeit.
So lassen sich Request-Dauer oder Anzahl Aufrufe auf einer Schnittstelle genau so messen, Auslastung von Ressourcen.

Auch die Docker Engine gibt Metriken aus, welche von Prometheus verstanden werden. https://docs.docker.com/config/daemon/prometheus

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

### Starten Container aus Image prometheus
    docker run': docker run -e DOCKER_HOST=<ip_vmdebian> -p 9090:9090 dominikreussbzu/prometheus

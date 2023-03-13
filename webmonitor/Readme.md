# Webmonitor
## Image Versionen
webmonitor:v1
webmonitor:latest

### Beschreibung
Java Script App, welche Requests an eine Webseite sendet.
Die Ausgabe enthält eine Sqeuenznummer sowie einen Zeitstempel. Die gemessene Zeit zwischen Request und Response wird pro Sequenz angezeigt.

### Konfiguration mit Umgebungsvariablen
Umgebungsvariable TARGET enthält die Webadresse
Umgebungsvariable INTERVAL definiert die Abstände in Millisekunden

Folgendes Beispiel ruft die Webseite Docker.com, alle 5 Sekunden auf

    docker container run -d -e TARGET=docker.com -e INTERVAL=5000 dominikreussbzu/webmonitor
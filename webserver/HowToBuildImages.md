# Modul 169: Eigenes Image bauen

## Vorbereitung
    docker login --username $dockerId
    echo $dockerId
    more Dockerfile 

## Image erstellen aus Dockerfile
Voraussetzung ist, dass sie im Verzeichnis ihr *Dockerfile* abgelegt haben

#### Image lokal bauen und mit Tag v1 versehen
    docker build -t $dockerId/theImageName:v1 .

#### Erstelltes Image mit zusätzlichem Tag *latest* versehen
    docker tag $dockerId/theImageName:v1 $dockerId/theImageName:latest

## Image ins Repository verteilen
#### https://hub.docker.com ist das Repository von Docker

    docker image push --all-tags $dockerId/theImageName

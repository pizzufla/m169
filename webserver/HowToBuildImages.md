# Modul 169: Eigenes Image bauen

## Vorbereitung

### Linux Shell

    export dockerId [userId@docker]
    echo $dockerId
    docker login --username $dockerId
    
    more Dockerfile 

### Windows CMD

    set dockerID=[userID@docker]
    docker login --username %dockerId%

## Image erstellen aus Dockerfile

Voraussetzung ist, dass sie im Verzeichnis ihr *Dockerfile* abgelegt haben

### Image lokal bauen und mit Tag v1 versehen

    docker build -t $dockerId/theImageName:v1 .

### Bereits erstelltes Image mit zusätzlichem Tag *latest* versehen

    docker tag $dockerId/theImageName:v1 $dockerId/theImageName:latest

## Image ins Repository "pushen" verteilen

### <https://hub.docker.com> ist das Repository von Docker

    docker image push --all-tags $dockerId/theImageName

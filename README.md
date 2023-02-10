# m169

Conainer mit Docker laufen lassen

```
# Docker holt sich das image aus dem repository und lässt den Webserver NGINX auf Port 80 laufen.

docker run --publish 80:80 --name aWebserver nginx

# Alle Container anzeigen
docker ps -a

# Container stoppen
docker stop aWebserver

# Container wegräumen
docker rm aWebserver
````
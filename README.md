# m169

Conainer mit Docker laufen lassen

```
# Docker pulls and runs nginx image as a webserver

docker run --publish 80:80 --name aWebserver nginx

# Alle Container anzeigen
docker ps -a

# Container stoppen
docker stop aWebserver

# Container wegräumen
docker rm aWebserver
````
FROM dominikreussbzu/node

CMD ["node", "/webmonitor/app.js"]

ENV TARGET="bfsu.ch" \
    METHOD="HEAD" \
    INTERVAL="5000"

WORKDIR /webmonitor
COPY app.js .

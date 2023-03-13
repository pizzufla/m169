FROM dominikreussbzu/node

CMD ["node", "/webmonitor/app.js"]

ENV TARGET="bfsu.ch" \
    METHOD="HEAD" \
    INTERVAL="3000"

WORKDIR /webmonitor
COPY app.js .
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });


// need to write JWT logic on the ws-backend as well


wss.on('connection', function connection(ws, req) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
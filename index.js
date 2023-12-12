const JSON_SERVER = require("json-server");
const SERVER = JSON_SERVER.create();
const ROUTER = JSON_SERVER.router("db.json");
const MIDDLEWARES = JSON_SERVER.defaults();
const PORT = process.env.PORT || 3001;

SERVER.use(MIDDLEWARES);
SERVER.use(ROUTER);

SERVER.listen(PORT);

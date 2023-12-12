const JSON_SERVER = require("json-server");
const HTTP = require("http");
const SERVER = JSON_SERVER.create();
const ROUTER = JSON_SERVER.router("db.json");
const MIDDLEWARES = JSON_SERVER.defaults();
const PORT = process.env.PORT || 3001;

const keepAlivePing = () => {
    HTTP.get(`http://localhost:${PORT}/keepalive`, (res) => {
        console.log("Sent Keep Alive ping");
        res.on("end", () => setTimeout(keepAlivePing, 1800000)); // Ping every 30 minutes
    });
};
keepAlivePing();

SERVER.use(MIDDLEWARES);
SERVER.use(ROUTER);

SERVER.listen(PORT);

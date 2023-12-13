const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");

const router = jsonServer.router("db.json");
const app = jsonServer.create();

const PORT = process.env.PORT || 3000;

app.db = router.db;

const keepAlivePing = () => {
    http.get(`http://localhost:${PORT}/keepalive`, (res) => {
        console.log("Sent Keep Alive ping");
        res.on("end", () => setTimeout(keepAlivePing, 1800000)); // Ping every 30 minutes
    });
};

keepAlivePing();

app.use(jsonServerAuth);
app.use(router);

app.listen(3000, () => {
    console.log("API escuchando en el puerto 3000");
});

const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");
const http = require("http");
const cors = require("cors");

const router = jsonServer.router("db.json");
const app = jsonServer.create();

const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: "https://game-finder-react.netlify.app/",
    methods: "GET, POST",
    credentials: true // enable passing cookies, authentication headers, etc.
};

app.db = router.db;

const keepAlivePing = () => {
    http.get("https://gamefinder-back.onrender.com", (res) => {
        console.log("Sent Keep Alive ping");
        res.on("end", () => setTimeout(keepAlivePing, 840000)); // Ping every 14 minutes
    });
};

keepAlivePing();

app.use(cors());

app.use(jsonServerAuth);
app.use(router);

app.listen(PORT, () => {
    console.log("API escuchando en el puerto 3000");
});

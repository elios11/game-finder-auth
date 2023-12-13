const jsonServer = require("json-server");
const jsonServerAuth = require("json-server-auth");

const router = jsonServer.router("db.json");
const app = jsonServer.create();

app.db = router.db;

app.use(jsonServerAuth);
app.use(router);

app.listen(3000, () => {
    console.log("API escuchando en el puerto 3000");
});

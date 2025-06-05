
const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let users = [];
const userFile = "users.json";

if (fs.existsSync(userFile)) {
    users = JSON.parse(fs.readFileSync(userFile));
}

app.post("/register", (req, res) => {
    const { email, password } = req.body;
    const hashed = bcrypt.hashSync(password, 10);
    users.push({ email, password: hashed });
    fs.writeFileSync(userFile, JSON.stringify(users));
    res.send("Kayıt başarılı.");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (user && bcrypt.compareSync(password, user.password)) {
        res.send("Giriş başarılı.");
    } else {
        res.send("Geçersiz e-posta veya şifre.");
    }
});

app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});

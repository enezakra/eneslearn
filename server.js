
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

const usersFile = 'users.json';

app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
    if (users[email]) {
        return res.send('Bu e-posta zaten kayıtlı.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users[email] = { password: hashedPassword };
    fs.writeFileSync(usersFile, JSON.stringify(users));
    res.send('Kayıt başarılı!');
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
    if (!users[email]) {
        return res.send('Kullanıcı bulunamadı.');
    }
    const match = await bcrypt.compare(password, users[email].password);
    res.send(match ? 'Giriş başarılı!' : 'Hatalı şifre.');
});

app.listen(3000, () => console.log('Sunucu 3000 portunda çalışıyor'));

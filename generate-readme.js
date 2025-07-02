const fs = require("fs");

const content = `
# 🛡️ Auth API — Node.js, Express, MongoDB

Bu loyiha foydalanuvchi ro'yxatdan o'tishi, login qilish va email orqali aktivatsiyani o'z ichiga oladi. Loyihada JWT, bcrypt va nodemailer texnologiyalari ishlatilgan.

## 📦 Texnologiyalar

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- nodemailer
- dotenv
- CORS

## 🚀 Boshlash

### 1. Klonlash:

\`\`\`bash
git clone <your-repo-url>
cd auth-server
\`\`\`

### 2. Paketlarni o'rnatish:

\`\`\`bash
npm install
\`\`\`

### 3. .env fayl yarating:

\`\`\`
PORT=5000
JWT_SECRET=your_jwt_secret
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
MONGO_URL=mongodb+srv://Muzaffar:parol@cluster.mongodb.net/testDB
\`\`\`

### 4. Serverni ishga tushiring:

\`\`\`bash
node server.js
\`\`\`

## 📡 API endpointlar

| Endpoint | Method | Tavsifi |
|----------|--------|---------|
| /signup | POST | Foydalanuvchi ro'yxatdan o'tadi |
| /login | POST | Kirish qilish |
| /activate_account/:token | GET | Email orqali hisobni faollashtirish |

## 👤 Rollar

- admin
- user

## 📝 Litsenziya

MIT

---

📫 Muallif: Muzaffarbek Mustafayev  
`;

fs.writeFileSync("README.md", content);
console.log("✅ README.md fayli muvaffaqiyatli yaratildi!");

// server/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.send('서버가 정상적으로 작동 중입니다!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: '백엔드에서 온 응답입니다!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

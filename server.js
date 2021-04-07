const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/customers', (req, res) => {
    res.send([
            {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birth': '980519',
            'sex': '상남자',
            'job': '대학생'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '안현재',
            'birth': '980813',
            'sex': '상남자',
            'job': '개발자'
          },{
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '서한결',
            'birth': '980519',
            'sex': '상남자',
            'job': '개발자'
          },
          ])
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))
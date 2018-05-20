const express = require('express');

const app = express();


app.all('*', (req, res, next) => {
  //console.log("req.method 热", req.method);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Custom-Header, Content-Type, Accept");
    
    res.header("Access-Control-Allow-Headers", "X-Custom-Header");
    
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    res.header("Access-Control-Allow-Credentials", true);

    
    
        //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
     console.log("req.method", req.method);
    if(req.method == 'OPTIONS') {
        //让options请求快速返回

        res.sendStatus(200); 
    } else { 
        next(); 
    }
});
// const express = require('socket.io');
app.get('/', (req, res) => {
  res.send({
    name: 'name'
  });
});

app.get('/user', (req, res) => {

  res.send({
    code: 203,
    data: {
      name: 'rach'
    },
    msg: ''
  });

});

app.get('/jsonp', (req, res) => {

  res.send('handle("test")');

});

app.get('/list', (req, res) => {

  res.send({
    data: {
      list: [1, 3,5]
    }
  });

});

app.put('/user', (req, res) => {

  res.send({
    code: 203,
    data: {
      name: 'rach'
    },
    msg: ''
  });

});

app.listen(3002);

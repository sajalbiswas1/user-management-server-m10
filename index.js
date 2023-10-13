const express = require('express');
const cors = require('cors')
const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
const users = [
    {id:1, name:'sabana',email:"sabana@gmail.com"},
    {id:2, name:'sabnur',email:"sabnur@gmail.com"},
    {id:3, name:'purnima',email:"purnima@gmail.com"},
    {id:4, name:'sabana',email:"sabana@gmail.com"}
]

app.get('/', (req,res)=>{
    res.send('users Management server is running')
})

app.get('/user', (req,res)=>{
    res.send(users)
})
app.post('/user', (req,res)=>{
    console.log('Heating')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, ()=>{
    console.log(`server is running on PORT: ${port}`)
})
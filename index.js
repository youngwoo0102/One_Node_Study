const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

const user = {id :"admin", pw:"1234"}
const userList = []

app.get('/', (req,res) =>{
    res.json({data:userList})
})

//로그인
app.post('/', (req,res) =>{
    const{id,pw} = req.body
    for(const item of userList){
        if(item.id ===id){
            if(item.pw ===pw){
                res.json({result:true})
            }
            else{
                res.json({result:false})
            }   
        }else{
            res.json({result:true})
        }
    }
})

//회원가입
app.post("/register", (req,res)=>{
    const {id,pw,name} = req.body
    const user = {id,pw,name}
    userList.push(user)
    console.log(userList)
    res.json({result: true})
})

const port = 3000
app.listen(port, ()=>{
    console.log(`SERVER ON PORT : ${port}`)
})
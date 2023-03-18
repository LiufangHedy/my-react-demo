const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const COMMENTS_FILE = './comments.json'

app.use(bodyParser.json()).use(bodyParser.urlencoded({
    extended: true
}))
// app.use(express.static('./')) 
// 提供静态资源目录，可以访问当前server.js文件所在目录下的所有静态资源文件
app.use('/public',express.static('public'))
app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
    next()
})

app.get('/api/comments', (req, res)=> {
    // console.log('req: ', req);
    // console.log('res: ');
    fs.readFile(COMMENTS_FILE, (err, data)=> {
        if(err) {
            console.log('read comments file failed!', err);
            process.exit(1)
        }
        // console.log('read the comments: ', data);
        console.log('read the comments: ', data, data.toString(), JSON.parse(data), JSON.stringify(JSON.parse(data)));
        res.json(JSON.parse(data))
    })
})

app.post('/api/comments',(req, res)=> {
    fs.readFile(COMMENTS_FILE, (err, data)=> {
        if(err) {
            console.log('read comments file failed!', err);
            process.exit(1) 
        }
        let comments = JSON.parse(data.toString())
        let newComments = {
            id: Date.now(),
            author: req.body.author,
            text: req.body.text
        }
        comments.push(newComments)
        fs.writeFile(COMMENTS_FILE, JSON.stringify(comments, null, 4), (err, data)=> {
            if(err){
                console.log('write comments file failed!', err);
                process.exit(1)
            }
            res.json(newComments)
        })
    })
})
app.listen(3003, ()=> {
    console.log('server started at 3003...');
})
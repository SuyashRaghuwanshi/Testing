const express = require("express");
const router = express.Router();

const messages=[
    {
        user:"Suyash",
        text:"Hello I m here ot hire you",
        added: new Date()
    },
    {
        user:"Govinda",
        text:"I want to get hired!",
        added: new Date()
    }
]

router.get("/",(req, res)=>{
    res.render('index', {title: "Message Board", messages: messages});
});

router.get("/new",(req, res)=>{
    res.render('form', {title: "Add a Message"});
});

router.get('/message/:id', (req, res)=>{
    const id= parseInt(req.params.id, 10);
    const message = messages[id];
    if(!message) return res.status(404).render('error', {title:"Not found"});
    res.render('message',{title:"Message Details", message:message});
});

router.post('/new', (req,res)=>{
    const { messageUser, messageText} = req.body;
    messages.push({
        text:messageText,
        user:messageUser,
        added: new Date(),
    });
    res.redirect('/');
});
module.exports = router;
const express = require('express');
const path  = require('path');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); //serve all our static files form here
app.use('/css', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/jquery/dist/')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router
app.use('/', require('./routes/index'));
// app.get('/', (req, res)=>{
//     res.render('home',{
//         title: 'Home',
//         students
//     });
// });

app.listen(4000, ()=>{
    console.log('App started ..')
});
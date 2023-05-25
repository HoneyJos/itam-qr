const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.set('port', process.env.PORT || '8002');
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true,
});
app.use(express.static('public'))


app.use('/', (req, res) => {
    res.render('home');
})















app.listen(app.get('port'), () => {
    console.log('8002번 포트에서 대기 중');
})
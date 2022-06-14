let express = require('express');
let http = require('http');
let app = express();
let httpServer = http.createServer(app);

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res)=>{
	res.render('index');
});

httpServer.listen(8000);

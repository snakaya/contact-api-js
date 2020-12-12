var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.json({
        company_name:"LOOSEDAYS Co.,Ltd.",
        contact:{email:["info@loosedays.jp"]}
    });
});

app.use(function(err, req, res, next){
    console.log(err.stack);
    return res.status(500).send('Internal Server Error');
});

app.listen(port, 'localhost', function() {
    console.log(`Server running at http://localhost:${port}/`)
});

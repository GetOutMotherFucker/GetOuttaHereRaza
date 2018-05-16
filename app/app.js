var express = require('express');
var app = express();


app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Security Service.dk"
app.locals.productName = "Security Service.dk"

app.use(express.static('app/public'));

app.use(require('./routes/home'));
app.use(require('./routes/about'));
app.use(require('./routes/contact'));
app.use(require('./routes/login'));
app.use(require('./routes/personal'));
app.use(require('./routes/history'));
app.use(require('./routes/settings'));
app.use(require('./routes/restsignal'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
}
)

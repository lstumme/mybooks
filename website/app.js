const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(require('./controllers/errorController').get404);
mongoose.connect('mongodb://localhost/mybooks', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(result => {
    app.listen(3000);
});


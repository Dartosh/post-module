const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose'); //Connect MongoDB
const postApiRoutes = require('./routes/api-post-routes')
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const contactRoutes = require('./routes/contact-routes');
const requestRoutes = require('./routes/requests-routes');
const createPath = require('./helpers/create-path');

app.set('view engine', 'ejs');

const PORT = 3001;

//Connection link
const db = 'mongodb+srv://Antony:fynjy1633@cluster0.hropp.mongodb.net/node-lesson?retryWrites=true&w=majority';

//MongoDB connection
mongoose
    .connect(db, { useNewUrlParser: true , useUnifiedTopology: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));



app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'));

app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), { title });
});



app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
});



app.use(postRoutes);
app.use(contactRoutes);
app.use(requestRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
    const title = 'Error page';
    res
        .status(404)
        .render(createPath('error'), { title });
});


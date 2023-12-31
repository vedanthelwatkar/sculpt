const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json()); // For using req(body) we have to use a middleware and so to use middleware we use app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/careItems', require('./routes/careItems'));
app.use('/api/therapyItems', require('./routes/therapyItems'));
app.use('/api/blogItems', require('./routes/blogItems'));


app.listen(port, () => {
    console.log(`Sculpt backend listening at http://localhost:${port}`);
})

// npm run serve

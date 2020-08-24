const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const fs = require('fs')
require('./config/db')()
require('./routes')(app)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/public", express.static(path.join(__dirname, 'public')));


app.listen(PORT, ()=> console.log(`server start ${PORT}`));


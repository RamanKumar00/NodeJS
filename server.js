const express = require('express');
const app = express();
const db = require("./db");
require('dotenv').config(); // Load environment variables from .env file

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = process.env.port || 3000; // Use environment variable or default to 3000


const MenuItem = require('./module/menuItems');

app.get('/devotee', (req, res) => {
  res.send('jay bajrangbali');
});

app.get('/idli', (req, res) => {
  res.send('welcome to south indian resturant, and i love to serve you');
});

app.get('/life', (req, res) => {
  res.send('life mai bahut fuckup chal raha hai');
});


app.post('/menuItems', async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const newItems = new MenuItem(data); //  FIXED here

    const response = await newItems.save();
    console.log('data Saved');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/menuItems', async (req, res) => {
  try {
    const data = await MenuItem.find(); 
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);


// this is the port number of the server on whcich my server is running

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

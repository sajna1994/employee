
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sajnanaufal:sajna111naufal@cluster0.986zxan.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to my local DB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
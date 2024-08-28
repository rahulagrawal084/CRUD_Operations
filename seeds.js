const mongoose = require('mongoose');
const Product = require("./models/product")

mongoose.connect('mongodb://url/db_name', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open!!");
    })
    .catch((err) => {
        console.log("Oh No Error!!");
        console.log(err);
    });


// To insert many data
const seedProducts = [
    {
        name: "Fairy Eggplant",
        price: 1.00,
        category: "vegetable"
    },
    {
        name: "Organic Goddess Melon",
        price: 4.99,
        category: "fruit"
    },
    {
        name: "Organic Mini Seedless Watermelon",
        price: 3.99,
        category: "fruit"
    },
    {
        name: "Organic celery",
        price: 1.50,
        category: "vegetable"
    },
    {
        name: "Chocolate Whole Milk",
        price: 2.69,
        category: "dairy"
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })

const { model, Schema } = require("mongoose");


const orderSchema = new Schema({

    // I need product details,

    // User details,

    quantity : {
        // quantity of each item in an order
        type : Number,
        reuiquire: true,
    },
    products: {
        // Different type of product purchased in one order
    },
    deliveryAddress : {
        type : String,
        required: true,
    },

    total : {
        type : Number,
        required: true,
    }

})
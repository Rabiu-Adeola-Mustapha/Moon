const {model, Schema} = require("mongoose");



const productSchema = new Schema ({

    brandName : {
        type : String,
        reuired: true,
    },
    category : {
        type: String,
        required: true,
    
    },
    quantity : {
        type : Number,
        reuired: true,
    },
    price : {
        type : Number,
        reuired: true,
    },
    description : {
        type : String,
        reuired: true,
    },
    pictures : {
        // Max of five pics of the products.
    },
    ratings : {
        // buyers review on each product
    },
    comments : {
        // feedback from buyers of each product
    }
},{timestamps: true});


module.exports = model("Product", productSchema);
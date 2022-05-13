const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      // required: [true, " First Name is required"],
    },
    lastName: {
      type: String,
      // required: [true, " First Name is required"],
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
    },

    password: {
      type: String,
      length: 6,
      required: [true, "Password is required"],
    },
    address: {
      type: String,
      // required: [true]
    },
    monthlyIncome: {
      type: Number,
      // required: [true, "Kindly Input your monthly income"]
    },
    gender: {
      // not sure to adopt enum
    },
    orderHistory: {
      // both pending and delivered orders.
    },
    wishList: {
      // All products viewed by a user.
    },
    creditRating: {
      // This is base on user credit score
    },
    creditWorth: {
      // A ratio of monthly income
      //i.e Your monthly payables must not be more than 15% of your monthly earnings.
    },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);

const mongoose = require("mongoose");

main().catch(err=> console.log(err));

//creating a database
async function main(){
    await mongoose.connect("mongodb://localhost:27017/ShoppersChoice");
}

const contactSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userMobileNumber: {
        type: Number,
        required: true
    },
    userEmailAddress: {
        type: String,
        required: true
    },
    userMessage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Contactform = mongoose.model('Contactform', contactSchema);

module.exports = Contactform;

const paymentSchema = new mongoose.Schema({
    cardHolderName: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: Number,
        required: true,
    },
    startDateMonth: {
        type: Number,
        required: true,
    },
    startDateYear: {
        type: Number,
        required: true,
    },
    expiryDateMonth: {
        type: Number,
        required: true,
    },
    expiryDateYear: {
        type: Number,
        required: true,
    },
    securityCode: {
        type: Number,
        required: true,
    },
    billingAddress: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Paymentform = mongoose.model('Paymentform', paymentSchema);

module.exports = Paymentform;
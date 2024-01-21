const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: String,
    id: String,
    descriptions: String,
    price: String,
    image: String
})
const product = mongoose.model("Product", UserSchema)

module.exports = product
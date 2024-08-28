const mongoose = require("mongoose");
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, "Farm must have a name!"]
    },
    city: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Email required"]
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    ]
});
farmSchema.pre("findOneAndDelete", async function (data) {
    console.log("Pre MiddleWare!!");
    console.log(data);
})
farmSchema.post("findOneAndDelete", async function (data) {
    console.log("Post MiddleWare!!");
    console.log(data);
})
const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm;
import mongoose from "mongoose";

const ProductInventoryShema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    }
    ,
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
    deleted_at: {
        type: Date,
        default: null,
    },
    modified_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "modified_at" },
    })

const ProductInventory = mongoose.model("ProductInventory", ProductInventoryShema);
module.exports = ProductInventory;
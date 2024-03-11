import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: mongoose.Schema.Types.Text,
        required: true
    },
    SKU: {
        type: String,
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref :"ProductCategory",
        required: true,
        validate: {
            validator: async function (value) {
                const category = await mongoose.model("ProductCategory").findById(value);
                return !!category;
            },
            message: "Invalid category ID. Please provide a valid category.",
        },
    },
    inventory_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"ProductInventory",
        required: true,
        validate: {
            validator: async function (value) {
                const inventory = await mongoose.model("ProductInventory").findById(value);
                return !!inventory;
            },
            message: "Invalid inventory ID. Please provide a valid inventory.",
        },
    },
    price: {
        type: mongoose.Decimal128,
        required: true
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"ProductDiscount",
        required: true,
        validate: {
            validator: async function (value) {
                const discount = await mongoose.model("ProductDiscount").findById(value);
                return !!discount;
            },
            message: "Invalid discount ID. Please provide a valid discount.",
        },
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    },
    modified_at: {
        type: Date,
        required: true,
        default: Date.now
    }
    , timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
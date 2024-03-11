import mongoose from "mongoose";

const ProductDiscountSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    desc:{
        type:mongoose.Schema.Types.Text,
        require:true,
    }
    ,
    discount_percent:{
        type:mongoose.Decimal128,
        require:true,
    }
    ,
    active:{
        type:Boolean,
    }
    ,
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,
        default:Date.now
    }
    ,
    deleted_at:{
        type:Date,
        default:null
    }},
    {
        timestamps:true
    }
);

export const ProductDiscount = mongoose.model("ProductDiscount",ProductDiscountSchema);
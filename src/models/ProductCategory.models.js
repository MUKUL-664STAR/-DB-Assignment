import mongoose from "mongoose";

const ProductCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    desc: {
      type: mongoose.Schema.Types.Text,
      require: true,
    },
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
  }
);

const ProductCategory = moongoose.model("ProductCategory", ProductCategorySchema);
module.exports = ProductCategory;

import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  )

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: {
        type: String,
        required: true,
    },
    reviews: {reviewSchema},
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    }, 
    category: {
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    rating: { 
        type: String,
        required: true
    },
    numReviews: { 
        type: String,
        required: true
    },
    price: {
        type: String, 
        required: true 
    },
    countInStock: { 
        type: String, 
        required: true 
    }
},
    {
    timestamps: true
    }    
)

const Product = mongoose.model('Product', productSchema)

export default Product;
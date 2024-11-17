import mongoose from "mongoose";

const orderSchema  = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    productId:{
        type:String,
        require: true
    },
    price:{
        type:Number,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    buyer:{
        type:String,
        require: true
    },
    shippingAddress:{
        country:{
            type:String,
            default:null
        },
        street1:{
            type:String,
            default:null
        },        
        street2:{
            type:String,
            default:null
        },
        city:{
            type:String,
            default:null
        },
        province:{
            type:String,
            default:null
        },
        zip:{
            type:String,
            default:null
        }
    },


},{
    timestamps:true
})

const Order = mongoose.model('Order',orderSchema)

export default Order
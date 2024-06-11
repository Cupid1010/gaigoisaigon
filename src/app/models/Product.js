var mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const options = {
  separator: "",
  lang: "en",
  truncate: 120
}
mongoose.plugin(slug,options);

var ProductSchema = mongoose.Schema(
  {
    idPreword:{type:String, default:'SP'},
    productCode:{ type: String, slug: `idPreword`, unique: true,slug_padding_size: 4, },
    
    productSalePrice: Number,
    productDescription: [{type:Object}],

    productColor:String,
    productGender:String,
    productSize:[{type:String}],
    productImg:[{type:String}],
    productVideo:[{type:String}],
    url: String,
    sale:{
        type:Number,
        default:0,
    },
    isSpecial: {type:Boolean, default:false},
    isAvailable:{type:Boolean, default:true},
    isPreOrder:{type:Boolean, default:false},
    numberOfClicks:Number,
    brand:String,

    // gaigoi
    productName: String,
    productPrice: Number,
    quantitySold:String,
    weight:Number,


    // new
    productPhoneNumber: String,
    yearsOfBirth: String,
    height: Number,
    threeRingMeasurements: String,
    orgin: String,
    position: String,
    adress: String,
    workingTime: String,
    services: String,
    age: Number,

    slug: { type: String, slug: `productName`, unique: true },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('Product', ProductSchema);

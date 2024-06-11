const {
    mongooseToObject,
    mutipleMongooseToObject,
  } = require('../../util/mongoose');
const {getProduct} = require('../../util/getDataFromDB')
const ProductModel = require('../../app/models/Product');
const {makeNumberSorter} = require('../../util/makeNumberSorter')
  
  class ProductsController {
    //  [GET]  /products/:slug
    async productDetail(req, res) {
      console.log('da vao')
      const slug = req.params.slug;
      const productInfor = await ProductModel.findOne({slug:slug});
   
      const productAvatar = mongooseToObject(productInfor)?.productImg?.[0];
      const hotline = process.env.ADMIN_PHONE;

      const relatedProducts = await ProductModel.find({isAvailable:true});
      console.log("🚀 ~ ProductsController ~ productDetail ~ relatedProducts:", relatedProducts)
      const randomList = [];
      for(var i =0;i<1;) {

        const rdnumber = Math.floor(Math.random() * relatedProducts.length)
        if(randomList.includes(rdnumber)) {

        }
        else {
          randomList.push(rdnumber)
          i++;
        }
 

      }
      console.log("🚀 ~ ProductsController ~ productDetail ~ randomList:", randomList)
      
      const newrelatedProducts = relatedProducts.filter((product,index) => {
        return randomList.includes(index)
      })

       console.log("hi")
     


      res.render('products/detailProduct', {
        productInfor: mongooseToObject(productInfor),
        pageTitle:`${productInfor?.productName}- ${process.env.DOMAINNAME}`,
        productAvatar,
        hotline,
        products:mutipleMongooseToObject(await makeNumberSorter(newrelatedProducts))
      });

    
    }

    // [GET] /product/id
    async productInfor(req, res) {
      const id = req.params.id;
      const productInfor = await ProductModel.findOne({_id:id});
      res.json(productInfor);
    }
  }
  
  module.exports = new ProductsController();
  
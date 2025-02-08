const ProductModel = require("../models/Product");
const BrandModel = require("../models/Brand");
const CTVModel = require("../models/CTV");
const { mongooseToObject ,mutipleMongooseToObject} = require('../../util/mongoose');
const provincesJSON = require('../../resource/json/provinces.json')
const { getProducts } = require('../../util/getDataFromDB')
const axios = require('axios').default;
var jwt = require('jsonwebtoken');
const {calculateShipPrice} = require('../../util/calculatePriceBeforeSaveToDB')
const moment = require('moment');
const { filterAvailableProduct} = require('../../util/ignoreProduct')

const {makeNumberSorter} = require('../../util/makeNumberSorter')
class ApisController {


  async postCTV(req, res) {

    console.log(req.body)
    const ctvTeleId=req.body.ctvID;

    CTVModel.create({ctvTeleId})
    res.json(123)
}



 
}

module.exports = new ApisController();

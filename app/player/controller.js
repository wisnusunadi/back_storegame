const Player = require('./model')
const Voucher = require('../voucher/model')
const Category = require('../category/model')
module.exports = {
  landingPage : async(req,res) => {
    try {
      const voucher = await Voucher.find().select('_id name status thumbnail category').populate('category')
      res.status(200).json({data : voucher})
    } catch (error) {
      res.status(500).json({message: error.message || 'Server Error'})
    }
  },
  detailPage : async(req,res) => {
    try {
      const {id} = req.params
      const voucher = await Voucher.findOne({_id : id})
      .populate('category')
      .populate('nominals')
      .populate('user','_id name phoneNumber')
      
      if(!voucher){
        return res.status(404).json({message : 'Voucher game not found'})
      }

      res.status(200).json({data : voucher})

    } catch (error) {
      res.status(500).json({message : error.message || 'Server Error'})
    }
  },
  category : async(req,res) => {
    try {
      const category = await Category.find()
      res.status(200).json({data : category})
    } catch (error) {
      res.status(500).json({message: error.message || 'Server Error'})
    }
  }
}
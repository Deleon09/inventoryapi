const Product = require("../models/Product");

var ProductController = {

  create: async (req, res) => {
    try {
        var product = await Product.findOne({ name: req.body.name })

        if(product != null)
            throw { error: true, message: "El Producto ya fue registrado anteriormente" }

        var newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
            supplierId: req.body.supplierId,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            userId: req.user._id
        })

        await newProduct.save();
        return res.status(201).json({ error: false, message: "Producto creado!" });

    } catch (err) {
      return res.status(400).json(err);
    }
  },

  deletePro: async (req, res) => {
      try {
          var supr = await Product.findOneAndDelete({
            _id: req.body._id
          });

          return res.status(200).json({ obj: supr });
          
      } catch (err) {
            return res.status(400).json(err);
      }
  },

  updatePro: async(req, res) => {
      try{
         var upt = await Product.updateOne({name: req.body.name},
            {name: req.body.newName});

            return res.status(200).json({ obj: upt });

      } catch(err){
            return res.status(400).json(err);
      }
  },

  getAll: async (req, res) => {
    try{
        const { page = 1, limit = 10 } = req.query;

        const products = await Product.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec()
        
        const count = await Product.countDocuments();

        return res.status(200).json({
            pages: Math.ceil(count / limit),
            current: page,
            products
        });
    }
    catch(err){
        return res.status(400).json(err);
    }
}

}

module.exports = ProductController
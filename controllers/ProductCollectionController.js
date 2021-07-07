const ProductCollection = require('../models/ProductCollection');

var ProductCollectionController = {

    create: async (req, res) => {
        try {
            var productcollection = await ProductCollection.findOne({ name: req.body.name })

            if(productcollection != null)
                throw { error: true, message: "La colección ya fue registrada anteriormente" }
                
                const productArray = [req.body.productId];

            var newProductCollection = new ProductCollection({
                name: req.body.name,
                productId: productArray,
                userId: req.user._id
            })

            await newProductCollection.save();
            return res.status(201).json({ error: false, message: "Colección creada!" });

        }catch(err){
            return res.status(400).json(err);
        }
    },

    deleteProC: async (req, res) => {
        try {
            var supr = await ProductCollection.findOneAndDelete({
              _id: req.body._id
            });
  
            return res.status(200).json({ obj: supr });
            
        } catch (err) {
              return res.status(400).json(err);
        }
    },

    updateCollection: async (req, res) => {
        try {
            const cracoProduct = req.body.cracoProduct

            await ProductCollection.findOneAndUpdate(
                {
                    _id: req.body._id,
                },
                {
                    $addToSet: {
                        productId: cracoProduct,
                    },
                },
            )
            return res.status(201).json({ error: false, message: "Colección actualizada!" });
        } catch (err) {
            return res.status(400).json(err);
        }
    },

    getAll: async (req, res) => {
        try{
            const { page = 1, limit = 10 } = req.query;
    
            const productscollection = await ProductCollection.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec()
            
            const count = await ProductCollection.countDocuments();
    
            return res.status(200).json({
                pages: Math.ceil(count / limit),
                current: page,
                productscollection
            });
        }
        catch(err){
            return res.status(400).json(err);
        }
    }

};

module.exports = ProductCollectionController;
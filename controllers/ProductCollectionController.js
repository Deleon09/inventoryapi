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

};

module.exports = ProductCollectionController;
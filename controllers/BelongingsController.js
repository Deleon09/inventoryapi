const Belongings = require('../models/Belongings');

var BelongingsController = {

    create: async (req, res) => {
        try {
            var belonging = await Belongings.findOne({ name: req.body.name })

            if(belonging != null)
                throw { error: true, message: "El Belonging ya fue registrado anteriormente" }

            var newBelonging = new Belongings({
                name: req.body.name,
                barcode: req.body.barcode,
                description: req.body.description,
                amount: req.body.amount
            });
    
            await newBelonging.save();
            return res.status(201).json({ error: false, message: "Belonging creado!" });
    
        } catch (err) {
          return res.status(400).json(err);
        }
      },

    deleteBel: async (req, res) => {
        try {
            var supr = await Belongings.findOneAndDelete({
              _id: req.body._id
            });
  
            return res.status(200).json({ obj: supr });
            
        } catch (err) {
              return res.status(400).json(err);
        }
    },

    getAll: async (req, res) => {
        try{
            const { page = 1, limit = 10 } = req.query;
    
            const belongings = await Belongings.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec()
            
            const count = await Belongings.countDocuments();
    
            return res.status(200).json({
                pages: Math.ceil(count / limit),
                current: page,
                belongings
            });
        }
        catch(err){
            return res.status(400).json(err);
        }
    }

};

module.exports = Belongings
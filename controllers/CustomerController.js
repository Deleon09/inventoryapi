const Customer = require('../models/Customer');

var CustomerController = {

    create: async (req, res) => {
        try {
            var customer = await Customer.findOne({ name: req.body.name })

            if(customer != null)
                throw { error: true, message: "El cliente ya fue registrado anteriormente" }

            var newCustomer = new Customer({
                name: req.body.name,
                mail: req.body.quantity,
                phone: req.body.supplierId,
                Bdetails: req.body.price,
                location: req.body.location,
                notes: req.body.notes,
                userId: req.user._id
            });
    
            await newCustomer.save();
            return res.status(201).json({ error: false, message: "Cliente creado!" });
    
        } catch (err) {
          return res.status(400).json(err);
        }
      },

      deleteCus: async (req, res) => {
        try {
            var supr = await Customer.findOneAndDelete({
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
    
            const customers = await Customer.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec()
            
            const count = await Customer.countDocuments();
    
            return res.status(200).json({
                pages: Math.ceil(count / limit),
                current: page,
                customers
            });
        }
        catch(err){
            return res.status(400).json(err);
        }
    }
};

module.exports = CustomerController
const Supplier = require('../models/Supplier');

var SupplierController = {

    create: async (req, res) => {
        try {
            var supplier = await Supplier.findOne({ name: req.body.name })

            if(supplier != null)
                throw { error: true, message: "El proveedor ya fue registrado anteriormente" }

            var newSupplier = new Supplier({
                name: req.body.name,
                mail: req.body.mail,
                phone: req.body.phone,
                cif: req.body.cif,
                Bdetails: req.body.Bdetails,
                location: req.body.location,
                notes: req.body.notes,
                userId: req.user._id
            })

            await newSupplier.save();
            return res.status(201).json({ error: false, message: "Proveedor creado!" });

        }catch(err){
            return res.status(400).json(err);
        }
    },

    deleteS: async (req, res) => {
        try{
            var ret = await Supplier.findOneAndDelete({ _id: req.body._id });

            return res.status(200).json({ obj: ret });
        }
        catch(err){
            return res.status(400).json(err);
        }
    },
    
    getAll: async (req, res) => {
        try{
            const { page = 1, limit = 10 } = req.query;

            const suppliers = await Supplier.find()
                .limit(limit * 1)
                .skip((page - 1) * limit)
                .exec()
            
            const count = await Supplier.countDocuments();

            return res.status(200).json({
                pages: Math.ceil(count / limit),
                current: page,
                suppliers
            });
        }
        catch(err){
            return res.status(400).json(err);
        }
    }

}

module.exports = SupplierController
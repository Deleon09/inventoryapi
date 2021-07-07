const Departure = require('../models/Departure');

var DepartureController = {

    create: async (req, res) => {
        try {

            var newDeparture = new Departure({
                clientName: req.body.clientName,
                date: req.body.date,
                productId: req.body.productId,
                request: req.body.request,
                Observations: req.body.observations,
                userId: req.user._id
            })

            await newDeparture.save();
            return res.status(201).json({ error: false, message: "Salida creada!" });

        }catch(err){
            return res.status(400).json(err);
        }
    },

    deleteDep: async (req, res) => {
        try {
            var supr = await Departure.findOneAndDelete({
              _id: req.body._id
            });
  
            return res.status(200).json({ obj: supr });
            
        } catch (err) {
              return res.status(400).json(err);
        }
    }

};

module.exports = DepartureController;
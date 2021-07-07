const User = require('../models/User');
const jwt = require('jsonwebtoken');

var UserController = {

    create: async (req, res) => {
        try {
            var user = await User.findOne({ username: req.body.name })

            if(user != null)
                throw { error: true, message: "El usuario ya fue registrado anteriormente" }

            var newUser = new User({
                username: req.body.username,
                password: req.body.password,
                inventorytype: req.body.inventorytype
            })

            await newUser.save();
            return res.status(201).json({ error: false, message: "Usuario creado!" });

        }catch(err){
            return res.status(400).json(err);
        }
    },

    login: async (req, res) => {
        try{
            var user = await User.findOne({ username: req.body.username })

            if(user === null)
                throw { error: true, message: "Usuario incorrecto" }

            if(user.password !== req.body.password)
                throw { error: true, message: "Contraseña incorrecta" }

            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_KEY)

            return res.status(200).json({ error: false, message: "Inicio de sesión correcto", token: token})
        }
        catch(err){
            return res.status(400).json(err);
        }
    },

    getUser: async (req, res) =>{
        try {
            User.find({}, (err, result) => {
                if(err){
                  res.send(err);
                }
                
                res.send(result);
              }) 
        } catch (err) {
            return res.status(400).json(err);
        }
    }

};

module.exports = UserController;
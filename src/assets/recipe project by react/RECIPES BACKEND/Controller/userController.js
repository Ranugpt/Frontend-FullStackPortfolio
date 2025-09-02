const userModel = require('../model/recipeModel.js');
const saveUser = async (req,res)=>{
    const {name, age,gender,email} = req.body;
    try{
        const NewUser = new userModel({
            name,
            age,
            email,
            gender
        });
        await NewUser.save();
        res.status(201).json({message: "User created"});
    }catch(err){
        res.status(500).json({message: "ERROR ARHI HE KUCH GLATA HE BHAI"})
    }
};

module.exports = { saveUser};
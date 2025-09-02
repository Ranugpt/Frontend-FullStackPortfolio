const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://guptaranu719:WAPo9cQHVeweIGPV@cluster0.yddz4tc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    // useNewUrlParser: true,
    // useUnifiedTopology:true
}).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})
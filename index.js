// Importing express module
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000 ;
const app = express();


// database connect
// mongoose.connect("mongodb://localhost:27017/projectDG",{
//    
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// });
// database connect (UPDATED)mongodb://localhost:27017/projectDG

mongoose.connect(process.env.MONGO_URI)

// mongoose.connect("")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB Connection Error:", err));

let db = mongoose.connection;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

// for serving static html files
app.use(express.static('public'));


//handing the get request 
app.get("/",(req,res)=>{
    res.set({ "Access-Control-Allow-Origin": "*" });

    return res.redirect("index.html");
});

app.post("/formFillUp",(req,res)=>{
    const name = req.body.name;
    const reason = req.body.reason;
    const email = req.body.email;
    const phone = req.body.phone;
    const city = req.body.city;
    const state = req.body.state;
    const addressline = req.body.addressline;

    const data = {
        name: name,
        reason: reason,
        email: email,
        phone: phone,
        city: city,
        state: state,
        addressline: addressline,
    };

    db.collection("users").insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Data inserted successfully!");

    });
    return res.redirect("formSubmitted.html");
});

// starting the server on the port 3000
app.listen(port, () =>{
    console.log(`the app started successfully on port ${port}`);
});
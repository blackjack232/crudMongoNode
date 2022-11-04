const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user")
const compraRoute = require("./routes/compra")



// settings 

const app = express();
const port = process.env.PORT || 5100 ;

//middlewares
app.use(express.json());
app.use("/api",userRoute);
app.use("/api",compraRoute);

// routes

app.get("/",(req,res)=>{
    res.send("Coneccion exitosa")
})

// coneccion BD mongo

mongoose
.connect("mongodb+srv://admin:admin@cluster0.yokbt.mongodb.net/test?retryWrites=true&w=majority")
.then(()=>console.log("Conectado a mongo Atlas"))
.catch((error)=>console.error(error))


// server listening

app.listen(port,()=> console.log("Servidor listo y escuchando...", port))


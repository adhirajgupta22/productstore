const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db.config');
const productRoutes = require('./routes/product.routes');

dotenv.config();  //this helps in getting the .env data into these files    
const app = express();

const _dirname = path.resolve(); //this is used to get the current directory path

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Home page");
});
app.use('/api/products',productRoutes);

if(process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(_dirname,'/frontend/dist')));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(_dirname,'frontend','dist','index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
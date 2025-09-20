const express= require('express');
const productsRouter= require('../routes/productsRouter');
const cartsRouter= require('../routes/cartsRouter');

const app = express(); 
const PORT=8080;

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, ()=>{//handler
    console.log(`server escuchando en http://localhost:${PORT}`)
})
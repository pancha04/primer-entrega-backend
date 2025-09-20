const expres= require('express');
const productsRouter= require('../routes/productsRouter');
const cartsRouter= require('../routes/cartsRouter');

const PORT=8080;
app.listen(PORT, ()=>{//handler
    console.log(`server escuchando en http://localhost:${PORT}`)
})
const express = require('express');
const cors = require('cors');
const path = require('path');


const productRoutes = require('./routes/products');


const app = express();


const PORT = 3001;


app.use(express.json()); 
app.use(cors());


app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
  res.send('<h1>Servidor com Nodemon funcionando!</h1>');
});


app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
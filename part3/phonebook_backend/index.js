const express = require('express');
const app = express();
const morgan = require('./middleware/morgan');
const userRoutes = require('./routes/persons');

let entries = 0;

// middlewares
app.use(express.json());  
app.use(morgan.initialize());

// routes
app.use('/api', userRoutes);

app.get('/info', (req, res)=>{
    const now = new Date();
    res.send('<p>Phonebook has info for '+entries+' people</p> \n<p>'+now.toString()+'</p>');
    entries++;
});

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'Unknown endpoint' })
}
app.use(unknownEndpoint);

// app initialization
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log('Server tunning on port '+PORT);
})
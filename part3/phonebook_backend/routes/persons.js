const express = require('express');
const router = express.Router();
const data = require('../persistence/data');

let persons = data.persons;
const maxNumberId = 9999999;

router.get('/persons', (req, res)=>{
    res.json(persons);
});

router.get('/persons/:id', (req, res)=>{
    const id = req.params.id;

    const person = persons.find(person=>person.id===Number(id));

    if(person){
        res.json(person);
    }else{
        res.status(404).end();
    }
});

router.delete('/persons/:id', (req, res)=>{
    const paramId = req.params.id;
    persons = persons.filter(person => person.id !== Number(paramId));
    res.status(204).end();
});

const generateId = ()=>{
    return Math.floor(Math.random() * maxNumberId);
}

const idExists = (id)=>{
    return persons.some(person => person.id === id);
}

router.post('/persons', (req, res)=>{
    const body = req.body;
    const newId = generateId();

    if(!body){
        return res.status(400).json({
            error: 'Missing content body'
        });
    }

    if(!body.name) {
        return res.status(400).json({
            error: 'Missing name'
        });
    }

    if(!body.number) {
        return res.status(400).json({
            error: 'Missing number'
        });
    }

    if(persons.some(person => person.name === body.name)) {
        return res.status(400).json({
            error: 'Name must be unique'
        });
    }

    if(idExists(newId)){
        res.status(400).json({
            id: 'Duplicated id, try again?'
        });
    }

    const person = {
        id: newId,
        name: body.name,
        number: body.number
    };

    persons = persons.concat(person);

    res.json(person);

});

module.exports = router
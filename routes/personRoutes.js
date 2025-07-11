const express = require('express');
const person = require('../module/Person');
const router = express.Router();

router.post('/',async(req, res)=>{
    try{
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();    
        console.log('data Saved');
        res.status(200).json(response); 
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });   

    }
})

router.get('/', async (req, res) => {
  try {
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if(workType =='chef' || workType == 'waiter'|| workType == 'manager') {
      const response = await person.find({ work: workType});
      console.log("data fetched");
      res.status(200).json(response);
    }
    else{
      res.status(400).json({error:'invalid worktype'});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
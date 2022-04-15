const express = require('express');
const router = express.Router();
const Data = require('../model/Data');

//----------------------------fetching data----------------------------//

router.post('/fetchdata', async (req, res) => {
    try {

        const {filtervalue} = req.body

        if (filtervalue == 'all')
        {
            const data = await Data.find({});
            res.json(data);
        }
        else
        {
            const data = await Data.find({category: filtervalue});
            res.json(data);
        }
        

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error occured");
    }
})

//---------------------------adding data------------------------------//

router.post('/add', async (req, res) => {
    try {
        const { name, category, price, image } = req.body;

        const data = new Data({
            name, category, price, image
        })

        const saveData = await data.save()
        res.json(saveData)

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error occured");
    }
})

router.post("/getbyid", async (req, res) => {

    const dataid = req.body.dataid

    try {
        const data = await Data.findOne({ _id: dataid })
        res.send(data)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/edit", async (req, res) => {

    const newData = req.body.newData

    try {
        const data = await Data.findOne({ _id: newData._id })

        data.name = newData.name,
            data.image = newData.image,
            data.category = newData.category,
            data.price = newData.price

        await data.save()

        res.send('Updated successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/delete", async (req, res) => {

    const dataid = req.body.dataid

    try {
        await Data.findOneAndDelete({ _id: dataid })
        res.send('Deleted successfully')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

module.exports = router

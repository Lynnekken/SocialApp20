require('dotenv').config();
const express = require ("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.Port;

app.use(cors());
app.use(express.json());

const Database = "sample_analytics"

app.use(async function (req, res, next) {
    await mongoose.connect(`${process.env.Connection}${Database}?retryWrites=true&w=majority`)
    next();
});

const testSchema = new mongoose.Schema({
    account_id: Number,
    limit: Number
});

const Account = mongoose.model('accounts', testSchema);


app.get('/', (req, res) => {
    res.send('Hello')
});

app.get('/get', async(req, res) => {
    const test = await Account.find({});
    res.send(test);
})

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
});
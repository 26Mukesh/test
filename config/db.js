const mongoose = require('mongoose')
const url = "mongodb+srv://mukesh:Mukesh26@cluster0-05i2g.mongodb.net/socketDB?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        mongoose.connect(url, { 
            useNewUrlParser: true, 
            useUnifiedTopology:true,
            useFindAndModify: false
        })
        mongoose.set('debug', true);
        console.log('connected to DB')        
    } catch (error) {
        console.error(error);
        process.nextTick(1)
    }
}

module.exports = connectDB;

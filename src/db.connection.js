const mongoose = require('mongoose');

const connectionDB = () => {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.connection.on('error', function(){
            console.log('It was occur an error');
        });
}

/*database (){ 
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('error', function(){
        console.log('It was occur an error');
    })
}*/

/*const connectionDB = async ()=>{
    try{
        await  mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        await mongoose.connect.on('error', function (){
            console.log('it can not connect to DB');
        })
    }
}
*/
module.exports = connectionDB;
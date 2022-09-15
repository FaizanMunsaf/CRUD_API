const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017`, {
    dbName:'productStore',
    useNewUrlParser:true, //allow users to fall back to the old parser if they find a bug in the new parser.
    useUnifiedTopology:true // You can opt in to using it by passing the option to your MongoClient constructor
}).then(()=> {
    console.log("connection successful");
}).catch((e) => {
    console.log('no Connection');
});
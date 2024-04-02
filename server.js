const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();


app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT || 3999;
const HOST = 'localhost'

require('./app/routes/index')(app);
require('./app/sockets/index')(app);

// connect mongoose Db
db.mongoose.connect(dbConfig.mongoAtlasUri,
    err => {
        if (err) throw err;
        console.log('DB connected Successfully')
        initial()
    });


app.listen(PORT, HOST, () => {
    console.log(`Server is running on port ${PORT}.`);
});
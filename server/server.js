const port = 8000;
const dbName = "clever-closet";

const cors = require("cors");
const express = require("express");

require("./config/mongoose.config")(dbName);

const app = express();//create app

app.use(express.json());//use json
app.use(cors());

require("./routes/closet.routes")(app);

app.listen(port, () =>
    console.log(`Listening on port ${port} fot Request and Respond to.`)
);
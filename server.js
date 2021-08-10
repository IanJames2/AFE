const express = requre("express"); //imports express (api-web call) //https://www.geeksforgeeks.org/introduction-to-express/
const cors = require("cors"); //cross origin resourse sharing... Sends and recieves data on external sources
const port = 8000;
const app = express(); //an instance of the express server


app.use(cors());
app.use(express.json()); //parses json data

app.get("/", (req, res) => {
    req.json({"message": "ok"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require('express');
const cors = require('cors'); 
const greetRouter = require('./routes/messageRoute');
const dotenv = require("dotenv")

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
  }))


app.use('/api/greet', greetRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
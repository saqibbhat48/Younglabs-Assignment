const express = require('express');
const cors = require('cors'); 
const greetRouter = require('./routes/messageRoute');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
  }))


app.use('/api/greet', greetRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
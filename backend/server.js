const express = require('express');
const cors = require('cors'); 
const greetRouter = require('./routes/messageRoute');
const dotenv = require("dotenv")
const path = require("path")

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
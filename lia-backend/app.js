const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routesUrls = require('./routes/routes')
const simulationRoutes = require("./routes/simulation-routes")
const cookieParser = require("cookie-parser")
const cors = require("cors");
const path = require('path');

dotenv.config()
//MongoDB 

mongoose.connect(process.env.DATABASE_ACCESS, (error) => {
  if (error) return console.error(error);
  console.log("Connected to MongoDB")
});

//Server connection
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
})
);
app.use("/auth", require("./routes/userRouter"));
app.use("/statistics", require("./routes/statisticsRouter"));

app.use("/backend/simulations", simulationRoutes);
app.use('/app', routesUrls);

app.use(express.static(path.resolve(__dirname, '../lia-frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../lia-frontend/build', 'index.html'));
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});


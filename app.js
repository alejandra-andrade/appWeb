const express = require("express");
const connectDB = require("./db");
const taskRoutes = require("./routes/tasks");
const goalRoutes = require("./routes/goals");

const app = express();
app.use(express.json());

connectDB();

app.use("/", taskRoutes);
app.use("/", goalRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/user.routes");

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

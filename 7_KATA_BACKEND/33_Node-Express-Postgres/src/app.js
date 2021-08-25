//Importing modules
import express from "express";
import morgan from "morgan";
//Importing routes
import userRoutes from "./routes/user.routes";

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
//Routes
app.use("/api/users", userRoutes);

export default app;

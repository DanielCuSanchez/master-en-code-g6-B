//Importing modules
import express from "express";
import morgan from "morgan";
//Importing routes
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes";

const app = express();

console.log(__dirname)
app.use('/', express.static(__dirname +'/public'));

//Middlewares
app.use(express.json());
app.use(morgan("dev"));


//Routes API
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);


export default app;

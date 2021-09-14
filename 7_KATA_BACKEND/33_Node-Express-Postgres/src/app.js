//Importing modules
import express from "express";
import morgan from "morgan";

import path from "path";

//Importing routes
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes";
import userRoutesViews from "./routes/user.routes.views";
import taskRoutesViews from "./routes/task.routes.views";

const app = express();

app.use(express.static(__dirname + "/public"));

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Config view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);

//Routes views
app.get("/", (req, res) => {
  res.render("pages/home");
});
app.use("/users", userRoutesViews);
app.use("/tasks", taskRoutesViews);

//Routes API
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

export default app;

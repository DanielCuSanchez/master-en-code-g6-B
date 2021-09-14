import { Router } from "express";
import { User } from "../models/User";

const router = Router();

//console.log(router);

//  api/users
router.get("/", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["id", "name", "lastname"],
  });

  res.render("pages/users", {
    name: "Daniel",
    data: allUsers,
  });
}); //  api/users/
// router.get("/:idUser", getOneUser); //  api/users/
// router.post("/", postUser); //  api/users/
// router.put("/:idUser", updateOneUser);
// router.delete("/:idUser", deleteOneUser);

export default router;

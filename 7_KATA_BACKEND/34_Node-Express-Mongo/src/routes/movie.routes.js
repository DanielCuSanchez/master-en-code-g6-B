import { Router } from "express";
//Importing controllers
import {
  deleteOneMovie,
  getOneMovie,
  getMovie,
  postMovie,
  updateOneMovie,
} from "../controllers/movie.controller";

const router = Router();


//  api/movie
router.post("/", postMovie); //  api/movie/
router.get("/:idMovie", getOneMovie); //  api/movie/
router.get("/", getMovie); //  api/movie/
router.put("/:idMovie", updateOneMovie);
router.delete("/:idMovie", deleteOneMovie);

export default router;

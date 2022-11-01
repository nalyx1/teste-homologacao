import { Router } from "express";
import NewsController from "../controllers/news.controller.js";

const routes = Router();

// Add routes
routes.get("/top", NewsController.findTopNews);

export default routes;

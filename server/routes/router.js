import express from "express";
// import services from "../services/render";
import {create,find,update,Delete} from "../controllers/controller.js";

const route=express.Router();
// /**
//  *  @description Root Route
//  *  @method GET /
//  */
// route.get("/", services.homeRoutes);

// /**
//  *  @description add users
//  *  @method GET /add-user
//  */
// route.get("/add-user", services.add_user);

// /**
//  *  @description for update user
//  *  @method GET /update-user 
//  */
// route.get("/update-user", services.update_user);

// API
route.post("/users", create);
route.get("/users", find);
route.put("/users/:id", update);
route.delete("/users/:id", Delete);

export default route;

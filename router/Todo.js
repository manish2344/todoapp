const express = require("express");
const Createtodo = require("../modules/Createtodo");
const Deletetodo = require("../modules/Deletetodo");
const {Getalldata } = require("../modules/Getalldata")
const Updatetodo = require("../modules/Updatetodo");
const router = express.Router();

router.get("/getdata" ,Getalldata );
router.post("/postdata",Createtodo);
router.put("/updatedata/:id",Updatetodo);
router.delete("/deletedata/:id", Deletetodo);
module.exports= router;
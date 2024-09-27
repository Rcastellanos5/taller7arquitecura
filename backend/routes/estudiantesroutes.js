const express=require("express");
const cors=require("cors");
const estudiantescontroller =require("../controllers/estudiantescontroller.js");

router.get("/",estudiantescontroller.consultar);
router.get("/",estudiantescontroller.ingresar);
router.route("/:id")

.get(estudiantescontroller.consultar)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);

module.exports=router;

const express = require("express");

const router = express.Router();
const langagesControllers = require("./controllers/langagesControllers");

router.get("/langages", langagesControllers.browse);

router.get("/langages/:id", langagesControllers.read);

router.post("/langages", langagesControllers.add);

router.delete("/langages/:id", langagesControllers.destroy);

router.put("/langages/:id", langagesControllers.edit);

module.exports = router;

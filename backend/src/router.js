const express = require("express");

const router = express.Router();
const langagesControllers = require("./controllers/langagesControllers");
const projetsControllers = require("./controllers/projetsControllers");

router.get("/langages", langagesControllers.browse);
router.get("/projets", projetsControllers.browse);

router.get("/langages/:id", langagesControllers.read);
router.get("/projets/:id", projetsControllers.read);

router.post("/langages", langagesControllers.add);
router.post("/projets", projetsControllers.add);

router.delete("/langages/:id", langagesControllers.destroy);
router.delete("/projets/:id", projetsControllers.destroy);

router.put("/langages/:id", langagesControllers.edit);
router.put("/projets/:id", projetsControllers.edit);

module.exports = router;

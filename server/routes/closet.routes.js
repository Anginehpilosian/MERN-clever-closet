const closetController = require("../controllers/closet.controller");

module.exports = (app) => {
    app.get("/api/closet", closetController.getAll);
    app.get("/api/closet/:id", closetController.getOne);
    app.post("/api/closet", closetController.create);
    app.delete("/api/closet/:id", closetController.delete);
    app.put("/api/closet/:id", closetController.update);
    // app.get("/api/weather", );
    // app.post("/api/weather", );
};
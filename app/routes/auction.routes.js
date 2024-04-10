
const controller = require("../controllers/auction.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auction/user/:userId",
    controller.user
  );

  app.post("/api/auction/start",
  controller.start
);

app.post("/api/auction/stop",
controller.stop
);


};
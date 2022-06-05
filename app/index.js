import express from "express";
import sequelize from "./utils/utils.database.js";

import router from "./routes/route.user.js";

const app = express();

app.use("/users", router);

(async () => {
  try {
    await sequelize.sync({
      force: false,
    });
    app.listen(process.env.EXTERNAL_PORT || 5000);
  } catch (error) {
    console.log(error);
  }
})();

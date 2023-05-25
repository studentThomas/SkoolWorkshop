const logger = require("../util/logger").logger;
const pool = require("../util/mysql-db");

const workshopController = {
  addWorkshop: (req, res, next) => {
    const workshop = req.body;

    const sqlCheck = `SELECT * FROM workshop WHERE name = ?`;
    const sqlStatement = `INSERT INTO workshop SET ?`;

    pool.getConnection((err, conn) => {
      if (err) {
        return next({
          status: 409,
          message: err.message,
        });
      }

      conn.query(sqlCheck, [workshop.name], (error, results) => {
        if (error) {
          return next({
            status: 409,
            message: error,
          });
        }

        if (results.length > 0) {
          return next({
            status: 403,
            message: `Workshop already exists`,
          });
        } else {
          conn.query(sqlStatement, workshop, (error, results) => {
            if (error) {
              return next({
                status: 409,
                message: error,
              });
            }

            res.status(201).json({
              status: 201,
              message: "Workshop created",
              data: workshop,
            });
          });
        }
      });
    });
  },
};

module.exports = workshopController;

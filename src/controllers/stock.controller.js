const logger = require("../util/logger").logger;
const pool = require("../util/mysql-db");

const stockController = {
  updateStock: (req, res, next) => {
    const productId = req.params.productId;

    let quantity = req.body.quantity;

    let sqlCheck = `SELECT * FROM stock WHERE productId = ?`;
    let sqlStatement = `UPDATE stock SET quantity = ? WHERE productId = ?`;

    pool.getConnection((err, conn) => {
      if (err) {
        return next({
          status: 409,
          message: err.message,
        });
      }

      conn.query(sqlCheck, [productId], (error, results) => {
        if (error) {
          return next({
            status: 409,
            message: error,
          });
        }

        if (quantity < 0) {
          quantity = results[0].quantity - Math.abs(quantity);
        } else {
          quantity = results[0].quantity + quantity;
        }

        if (results.length == 0) {
          return next({
            status: 409,
            message: "Product is not found",
          });
        }

        conn.query(sqlStatement, [quantity, productId], (error, results) => {
          if (err) {
            return next({
              status: 409,
              message: err.message,
            });
          }

          if (results) {
            res.status(200).json({
              status: 200,
              message: "Stock is updated",
              data: {
                quantity: quantity,
              },
            });
          }
        });
      });
    });
  },
};

module.exports = stockController;

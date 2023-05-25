const logger = require("../util/logger").logger;

const productController = {
  getProducts: (req, res, next) => {
    let sqlStatement = "SELECT * FROM `product`";

    pool.getConnection(function (err, conn) {
      if (err) {
        next({
          status: 409,
          message: err.message,
        });
      }

      conn.query(sqlStatement, function (err, results, fields) {
        if (err) {
          next({
            status: 409,
            message: err.message,
          });
        }
        const products = results;

        if (results) {
          res.status(200).json({
            status: 200,
            message: "All products are retrieved",
            data: products,
          });
        }
        pool.releaseConnection(conn);
      });
    });
  },
};

module.exports = productController;

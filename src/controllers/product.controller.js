const logger = require("../util/logger").logger;
const pool = require("../util/mysql-db");

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

      conn.query(sqlStatement, (err, results) => {
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

  addProduct: (req, res, next) => {
    const product = req.body;
    const name = product.name;
    let sqlCheck = `SELECT * FROM product WHERE name = ?`;
    let sqlStatement = `INSERT INTO product SET ?`;

    logger.info(product);

    pool.getConnection(function (err, conn) {
      if (err) {
        next({
          status: 409,
          message: err.message,
        });
      }

      conn.query(sqlCheck, [name], (error, results) => {
        if (error) {
          next({
            status: 409,
            message: error,
          });
        }

        if (results.length > 0) {
          next({
            status: 403,
            message: `Product already exists`,
          });
        } else {
          conn.query(sqlStatement, product, (error, results) => {
            if (error) {
              next({
                status: 409,
                message: error,
              });
            }
            if (results) {
              const insertedProduct = { id: results.insertId, ...product };

              res.send({
                status: 201,
                message: `Product created`,
                data: insertedProduct,
              });
            }
          });
        }
        pool.releaseConnection(conn);
      });
    });
  },
};

module.exports = productController;

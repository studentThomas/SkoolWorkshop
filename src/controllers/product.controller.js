const logger = require("../util/logger").logger;
const pool = require("../util/mysql-db");

const productController = {
  getProducts: (req, res, next) => {
    let sqlStatement = "SELECT * FROM product";

    pool.getConnection(function (err, conn) {
      if (err) {
        return next({
          status: 409,
          message: err.message,
        });
      }

      conn.query(sqlStatement, (err, results) => {
        if (err) {
          return next({
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
    const { workshopId, quantity, ...productData } = req.body;

    let sqlCheck = `SELECT * FROM product WHERE name = ?`;
    let sqlProduct = `INSERT INTO product SET ?`;
    let sqlStock = `INSERT INTO stock (productId, workshopId, quantity) VALUES (?, ?, ?)`;

    pool.getConnection(function (err, conn) {
      if (err) {
        return next({
          status: 409,
          message: err.message,
        });
      }

      conn.query(sqlCheck, [productData.name], (error, results) => {
        if (error) {
          return next({
            status: 409,
            message: error,
          });
        }

        if (results.length > 0) {
          return next({
            status: 403,
            message: `Product already exists`,
          });
        } else {
          conn.query(sqlProduct, productData, (error, resultProduct) => {
            if (error) {
              return next({
                status: 409,
                message: error,
              });
            }

            const productId = resultProduct.insertId;
            const stockData = [productId, workshopId, quantity];

            conn.query(sqlStock, stockData, (error, resultStock) => {
              if (error) {
                return next({
                  status: 409,
                  message: error,
                });
              }

              res.status(201).json({
                status: 201,
                message: "Product created",
                data: productData,
              });
            });
          });
        }
        pool.releaseConnection(conn);
      });
    });
  },

  deleteProduct: (req, res, next) => {
    const productId = req.params.productId;
    const sqlCheck = `SELECT * FROM product WHERE id = ?`;
    const sqlStatement = `DELETE product, stock FROM product 
    LEFT JOIN stock ON product.id = stock.productId
    WHERE product.id = ?`;

    pool.getConnection(function (err, conn) {
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

        if (results.length == 0) {
          return next({
            status: 403,
            message: `Product not found`,
          });
        }

        conn.query(sqlStatement, [productId], (error, results) => {
          if (error) {
            return next({
              status: 409,
              message: error,
            });
          }

          if (results) {
            res.send({
              status: 200,
              message: `Product deleted`,
              data: {},
            });
          }

          pool.releaseConnection(conn);
        });
      });
    });
  },

  updateProduct: (req, res, next) => {
    const productId = req.params.productId;
    const updatedProduct = req.body;
    const sqlStatement = `UPDATE product SET ? WHERE id = ?`;
    const sqlCheck = `SELECT * FROM product WHERE id = ?`;

    pool.getConnection(function (err, conn) {
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

        if (results.length == 0) {
          return next({
            status: 403,
            message: `Product not found`,
          });
        }

        conn.query(
          sqlStatement,
          [updatedProduct, productId],
          (error, results) => {
            if (error) {
              return next({
                status: 409,
                message: error,
              });
            }

            if (results) {
              res.send({
                status: 200,
                message: `Product updated`,
                data: updatedProduct,
              });
            }

            pool.releaseConnection(conn);
          }
        );
      });
    });
  },
};

module.exports = productController;

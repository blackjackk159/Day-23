require("./dbInit");
const app = require("express")();
const postRoutes = require("../routes/post");
const errorHandler = require("../utils/errorHandler");
app.use("/posts", postRoutes);

// error handler
// 錯誤處理的 middleware 相較一般 middleware 會多一個 err 引數
app.use(errorHandler);

module.exports = app;

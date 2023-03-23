const router = require("express").Router();
const Post = require("../models/post.js")
const appError = require("../utils/appError");

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    if (!data.content) {
      // 將以下改為 appError 自訂錯誤回饋
      return next(appError(400, "欄位未填寫正確：貼文內容為必填", next));
    }
    const newPost = await Post.create({
      user: data.user,
      content: data.content,
      tags: data.tags,
      type: data.type,
    });
    res.status(200).json({
      status: "success",
      data: newPost,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
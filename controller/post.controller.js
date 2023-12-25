const db = require("../db");

class PostController {
  async createPost(req, res) {
    const { title, content, user_id } = req.body;

    const newPost = await db.query(
      "INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *",
      [title, content, user_id]
    );

    res.json(newPost.rows[0]);
  }

  async getPostsByUser(req, res) {
    const userId = req.query.id;

    const posts = await db.query("SELECT * FROM post where user_id = $1", [
      userId,
    ]);

    res.json(posts.rows);
  }
}

module.exports = new PostController();

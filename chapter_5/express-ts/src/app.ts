import express, { Application, NextFunction } from "express";
import UsersHandler from "./handlers/users";
import PostsHandler from "./handlers/posts";

const app: Application = express();
const PORT: number = 8000;

// Add middleware to get the body from the request
app.use(express.json());

// Init handlers
const usersHandler = new UsersHandler();
const postsHandler = new PostsHandler();

const isAdmin = (req : Request, res : Response, next : NextFunction) =>{

}


// Define routes
app.get("/api/users", usersHandler.getUsers);
app.get("/api/users/:id", usersHandler.getUsersById);
app.post("/api/users", usersHandler.createUser);
app.delete("/api/users/:id", usersHandler.deleteUserById);

// TODO: Create endpoint for get user by id
// TODO: Create endpoint for delete user by id

app.get("/api/posts", postsHandler.getPosts);
app.get("/api/posts/:id", postsHandler.getPostsById);
app.post("/api/posts", postsHandler.createPost);
app.patch("/api/posts/:id", postsHandler.updatePostById);
app.delete("/api/posts/:id", postsHandler.deletePostById);
// TODO: Create endpoint for posts resource: create, update, get all, get by id, delete by id
// Attributes: id, title, content, user_id

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

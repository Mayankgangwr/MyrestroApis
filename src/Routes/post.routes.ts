//importing modules
import express from "express";
import { PostController } from '../Controllers/post.controller';

//initiating the router
const postRouter = express.Router();

//add post route
postRouter.post('/',PostController.addpost);

//get posts
postRouter.get('/', PostController.getPosts);

//get single post
postRouter.get('/:id', PostController.getAPost);

//update a post
postRouter.put('/:id', PostController.updatePost);

//delete a post
postRouter.delete('/:id', PostController.deletePost);

export default postRouter;


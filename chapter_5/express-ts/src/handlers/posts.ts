import { Request, Response } from "express";
import { DefaultResponse } from "../models/dto/default";
import { Post } from "../models/entity/post";
import listPost from "../../data/posts.json";
import { PostRequest } from "../models/dto/post";
import fs from "fs";

class PostsHandler {
  async getPosts(req: Request, res: Response) {
    const titleQuery: string = req.query.title as string;

    let filteredPosts: Post[] = listPost.map((post: Post) => ({
      id: post.id,
      title: post.title || "",
      content: post.content || "",
      user_id: post.user_id,
    }));

    if (titleQuery) {
      filteredPosts = filteredPosts.filter((post: Post) =>
        post.title?.toLowerCase().includes(titleQuery.toLowerCase())
      );
    }

    const response: DefaultResponse = {
      status: "OK",
      message: "Success retrieving data",
      data: {
        users: filteredPosts,
      },
    };

    res.status(200).send(response);
  }

  async getPostsById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const post = listPost.find((post) => post.id === id);

    if (!post) {
      const response: DefaultResponse = {
        status: "ERROR",
        message: "post not found",
        data: null,
      };

      res.status(404).send(response);
    }

    const response: DefaultResponse = {
      status: "OK",
      message: "Success retrieving data",
      data: post,
    };

    res.status(200).send(response);
  }

  async createPost(req: Request, res: Response) {
    const payload: PostRequest = req.body;

    // Payload validation
    if (!(payload.title && payload.content && payload.user_id)) {
      const response: DefaultResponse = {
        status: "BAD_REQUEST",
        message: "title,content,user_id cannot be empty",
        data: {
          created_post: null,
        },
      };

      res.status(400).send(response);
    }

    const postToCreate: Post = {
      id: listPost[listPost.length - 1].id + 1,
      title: payload.title,
      content: payload.content,
      user_id: payload.user_id,
    };

    const posts: Post[] = listPost;
    posts.push(postToCreate);

    fs.writeFileSync("./data/posts.json", JSON.stringify(posts));

    const response: DefaultResponse = {
      status: "CREATED",
      message: "Post succesfully created",
      data: {
        created_post: postToCreate,
      },
    };

    res.status(201).send(response);
  }

  async updatePostById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const post = listPost.find((post) => post.id === id);
    // Payload validation
    if (!post) {
      const response: DefaultResponse = {
        status: "ERROR",
        message: "post not found",
        data: null,
      };
      res.status(404).send(response);
    }

    const payload: PostRequest = req.body;
    if (!(payload.title && payload.content && payload.user_id)) {
      const response: DefaultResponse = {
        status: "ERROR",
        message: "title,content,user_id cannot be empty",
        data: {
          created_post: null,
        },
      };

      res.status(400).send(response);
    }

    const updatePost = listPost.filter((post: Post) => {
      if (post.id === id) {
        post.title = payload.title;
        post.content = payload.content;
        post.user_id = payload.user_id;
      }
      return post;
    });

    fs.writeFileSync("./data/posts.json", JSON.stringify(updatePost));

    const response: DefaultResponse = {
      status: "OK",
      message: "Post succesfully updated",
      data: { update_post: updatePost },
    };
    res.status(200).send(response);
  }

  async deletePostById(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    const filteredPosts = listPost.filter((post) => post.id !== id);

    const post = listPost.find((post) => post.id === id);

    if (!post) {
      const response: DefaultResponse = {
        status: "ERROR",
        message: "post not found",
        data: null,
      };

      res.status(404).send(response);
    }

    fs.writeFileSync("./data/posts.json", JSON.stringify(filteredPosts));

    const response = {
      status: "DELETED",
      message: "Post succesfully deleted",
      data: {
        delete_post: listPost.find((post) => post.id === id),
      },
    };

    res.status(200).send(response);
  }
}

export default PostsHandler;

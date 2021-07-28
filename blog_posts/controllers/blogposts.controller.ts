import express from "express";
import debug from "debug";
import blogpostsService from "../services/blogposts.service";

const log: debug.IDebugger = debug("app:blogposts-controller");

class BlogpostsController {
    async listBlogposts(req: express.Request, res: express.Response) {
        const page: number = req.body.page;
        const blogposts = await blogpostsService.list(9, page - 1);
        res.status(200).send(blogposts);
    }

    async getBlogpostById(req: express.Request, res: express.Response) {
        const blogpost = await blogpostsService.readById(req.body.id);
        res.status(200).send(blogpost);
    }

    async createBlogpost(req: express.Request, res: express.Response) {
        const blogpostId = await blogpostsService.create(req.body);
        res.status(201).send({ id: blogpostId });
    }

    async patch(req: express.Request, res: express.Response) {
        log(await blogpostsService.patchById(req.body.id, req.body));
        res.send(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        log(await blogpostsService.putById(req.body.id, req.body));
        res.status(204).send();
    }

    async removeUser(req: express.Request, res: express.Response) {
        log(await blogpostsService.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new BlogpostsController();

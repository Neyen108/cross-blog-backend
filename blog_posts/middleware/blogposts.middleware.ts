import express from "express";
import blogpostsService from "../services/blogposts.service";
import debug from "debug";

const log: debug.IDebugger = debug("app:blogposts-middleware");

class BlogpostsMiddleware {
    async validateBlogpostExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const blogpost = await blogpostsService.readById(req.params.blogpostId);

        if (blogpost) {
            res.locals.blogpost = blogpost;
            next();
        } else {
            res.status(404).send({
                error: `Blogpost ${req.params.blogpostId} not found`,
            });
        }
    }

    async extractBlogpostId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.blogpostId = req.params.blogpostId;
        next();
    }
}

export default new BlogpostsMiddleware();

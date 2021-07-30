import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";
import jwtMiddleware from "../auth/middleware/jwt.middleware";
import blogpostsController from "./controllers/blogposts.controller";
import permissionMiddleware from "../common/middleware/common.permission.middleware";
import { PermissionFlag } from "../common/middleware/common.permissionflag.enum";
import { body } from "express-validator";
import BodyValidationMiddleware from "../common/middleware/body.validation.middleware";

export class BlogpostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "BlogpostsRoutes");
    }

    configureRoutes(): express.Application {
        //have to be logged in for this route
        this.app
            .route("/blog")
            .all(jwtMiddleware.validJWTNeeded)
            .get(
                permissionMiddleware.permissionFlagRequired(
                    PermissionFlag.READ_PERMISSION
                ),
                blogpostsController.listBlogposts
            )
            .post(
                body("title").isString(),
                body("imageLink").isURL(),
                body("content").isString(),
                body("createdBy").isObject(),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                permissionMiddleware.permissionFlagRequired(
                    PermissionFlag.ADMIN_PERMISSION
                ),
                blogpostsController.createBlogpost
            );

        return this.app;
    }
}

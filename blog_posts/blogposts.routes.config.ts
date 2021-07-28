import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class BlogpostsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "BlogpostsRoutes");
    }

    configureRoutes(): express.Application {
        return this.app;
    }
}

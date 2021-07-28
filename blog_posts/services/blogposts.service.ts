import BlogpostsDao from "../daos/blogposts.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { CreateBlogpostDto } from "../dto/create.blogpost.dto";
import { PutBlogpostDto } from "../dto/put.blogpost.dto";
import { PatchBlogpostDto } from "../dto/patch.blogpost.dto";

class BlogpostsService implements CRUD {
    async create(resource: CreateBlogpostDto) {
        return BlogpostsDao.addBlogpost(resource);
    }

    async deleteById(id: string) {
        return BlogpostsDao.removeBlogpostById(id);
    }

    async list(limit: number, page: number) {
        return BlogpostsDao.getBlogposts(limit, page);
    }

    async patchById(id: string, resource: PatchBlogpostDto) {
        return BlogpostsDao.updateBlogpostById(id, resource);
    }

    async readById(id: string) {
        return BlogpostsDao.getBlogpostById(id);
    }

    async putById(id: string, resource: PutBlogpostDto) {
        return BlogpostsDao.updateBlogpostById(id, resource);
    }
}

export default new BlogpostsService();

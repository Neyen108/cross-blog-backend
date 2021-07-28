import mongooseService from "../../common/services/mongoose.service";
import { CreateBlogpostDto } from "../dto/create.blogpost.dto";
import { PutBlogpostDto } from "../dto/put.blogpost.dto";
import { PatchBlogpostDto } from "../dto/patch.blogpost.dto";

import shortid from "shortid";
import debug from "debug";

const log: debug.IDebugger = debug("app:blogposts-dao");

class BlogpostsDao {
    Schema = mongooseService.getMongoose().Schema;

    blogpostSchema = new this.Schema(
        {
            _id: String,
            title: String,
            imageLink: String,
            content: String,
            likedBy: [String],
            commentedBy: [String],
            createdBy: String,
            lastEditedBy: String,
        },
        { id: false, timestamps: true }
    );

    Blogpost = mongooseService
        .getMongoose()
        .model("Blogposts", this.blogpostSchema);

    constructor() {
        log("Created New instance of BlogpostsDao");
    }

    //CREATE
    async addBlogpost(blogpostFields: CreateBlogpostDto) {
        const Id = shortid.generate();
        const blogpostId = encodeURIComponent(
            blogpostFields.title + " " + Id
        ).replace(/%20/g, "+");

        const blogpost = new this.Blogpost({
            _id: blogpostId,
            ...blogpostFields,
        });

        await blogpost.save();
        return blogpostId;
    }

    //READ
    async getBlogpostById(blogpostId: string) {
        return this.Blogpost.findOne({ _id: blogpostId })
            .populate("Blogpost")
            .exec();
    }

    async getBlogposts(limit = 9, page = 0) {
        return this.Blogpost.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    //UPDATE
    async updateBlogpostById(
        blogpostId: string,
        blogpostFields: PatchBlogpostDto | PutBlogpostDto
    ) {
        const existingBlogpost = await this.Blogpost.findOneAndUpdate(
            { _id: blogpostId },
            { $set: blogpostFields },
            { new: true }
        ).exec();

        return existingBlogpost;
    }

    //DELETE
    async removeBlogpostById(blogpostId: string) {
        return this.Blogpost.deleteOne({ _id: blogpostId }).exec();
    }
}

export default new BlogpostsDao();

export interface CreateBlogpostDto {
    title: string;
    imageLink: string;
    content: string;
    likedBy?: string[];
    commentedBy?: string[];
    createdBy: string;
    lastEditedBy?: string;
}

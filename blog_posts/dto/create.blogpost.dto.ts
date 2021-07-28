export interface CreateBlogpostDto {
    title: string;
    imageLink: string;
    dateCreated: Date;
    content: string;
    likedBy?: string[];
    commentedBy?: string[];
    createdBy: string;
    lastEditedBy?: string;
}

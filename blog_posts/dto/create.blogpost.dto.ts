export interface CreateBlogpostDto {
    title: string;
    imageLink: string;
    content: string;
    likedBy?: string[]; //string array containing all the userIds who have liked the blogpost
    comments?: { comment: string; userId: string; name: string }[];
    createdBy: { userId: string; name: string };
    lastEditedBy?: { userId: string; name: string };
    mediumPublish?: boolean;
    devtoPublish?: boolean;
}

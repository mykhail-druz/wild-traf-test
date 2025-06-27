export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
}

export interface PostFormData extends Record<string, unknown> {
    title: string;
    content: string;
}

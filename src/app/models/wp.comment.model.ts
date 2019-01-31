
export interface WpComment {
    id: number;
    post: number;
    parent: number;
    author: number;
    author_name: string;
    author_url: string;
    date: Date;
    date_gmt: Date;
    content: Content;
    link: string;
    status: string;
    type: string;
    author_avatar_urls: AuthorAvatarUrls;
    meta: any[];
    _links: Links;
}

export interface WpCommentCreate {
    post: number;
    parent: number;
    author: number;
    author_name: string;
    author_email: string;
    author_url: string;
    date: Date;
    date_gmt: Date;
    content: string;
    status: string;
    type: string;
}

export interface Content {
    rendered: string;
}

export interface AuthorAvatarUrls {
    24: string;
    48: string;
    96: string;
}

export interface Self {
    href: string;
}

export interface Collection {
    href: string;
}

export interface Up {
    embeddable: boolean;
    post_type: string;
    href: string;
}

export interface Links {
    self: Self[];
    collection: Collection[];
    up: Up[];
}



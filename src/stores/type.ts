export interface SignInState {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  image: string;
  bio: string;
  following: Array<string>;
}

export interface Users extends Array<Article> {}

export interface Auth {
  token: String;
  refreshToken: string;
  isSignedIn: false;
  user: {
    following: Array<string>;
    _id: String;
    username: String;
    email: String;
    admin: false;
    bio: String;
    image: String;
  };
}

export interface action {
  type: string;
  payload?: any;
}

export interface ArticleAction {
  type?: string;
  payload?: any;
}

export interface Post {
  title?: string;
  description?: string;
  body?: string;
  createdAt?: string;
  tagList?: [] | string;
  author: {
    username: string;
    image: string;
  };
  id: string;
  favoritesCount: number;
  favorited: Array<string>;
  slug?: string;
  comments: Comments;
}

export interface Posts extends Array<Post> {}

export interface PostState {
  currentPostSlug: string;
  posts: Posts;
}

export interface CommentState {
  author: {
    image: string;
    username: string;
  };
  body: string;
  createdAt: string;
  commentId: string;
  updatedAt?: string;
}

export interface Comments extends Array<CommentState> {}

export interface Article {
  title: string;
  desc: string;
  body: string;
  tagList: [];
  _id: string;
  author: {
    username: string;
    bio: string;
    image: string;
  };
  createdAt: string;
  comments: Comments;
  favoritesCount: number;
  favorited: Array<string>;
}

export interface Articles extends Array<Article> {}

export interface ArticleState {
  isLoading: boolean;
  articles: Articles;
}

export interface AppState {
  authReducers?: any;
  articleReducers?: ArticleState;
}

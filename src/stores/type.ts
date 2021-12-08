export interface SignInState {
  email: string;
  password: string;
}

export interface User {
  userId: string;
  username: string;
  password: string;
  email: string;
  image: string;
  bio: string;
  following: Array<string>;
}

export interface Users extends Array<Article> {}

export interface Auth {
  isSigninSuccess?: boolean;
  isSignUpSuccess?: boolean;
  signInErrorMsg?: Array<string>;
  signUpErrorMsg?: Array<string>;
  currentUser?: {
    authenticated: boolean;
    userId?: string;
    username?: string;
  };
}

export interface action {
  type?: string;
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
    username?: string;
    image?: string;
  };
  id: string;
  favoritesCount: number;
  favorited: boolean;
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
  id: string;
  updatedAt?: string;
}

export interface Comments extends Array<CommentState> {}

export interface Article {
  title: string;
  desc: string;
  content: string;
  tagList: [];
  articleId: string;
  userId: string;
  createdAt: string;
  comments: Comments;
  favoritesCount: number;
  favorited: boolean;
}

export interface Articles extends Array<Article> {}

export interface ArticleState {
  currentArticle: string;
  articles: Articles;
}

export interface AppState {
  authReducers?: any;
  articleReducers?: ArticleState;
}

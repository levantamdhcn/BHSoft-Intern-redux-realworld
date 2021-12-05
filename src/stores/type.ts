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
  payload: any;
}

export interface ArticleAction {
  type?: string;
  payload: {
    currentArticle: string;
    article: Article;
  };
}

export interface Post {
  title?: string;
  description?: string;
  body?: string;
  createdAt?: string;
  tag?: string;
  author?: {
    username?: string;
    image?: string;
  };
  id?: string;
}

export interface Posts extends Array<Post> {}

export interface AppState {
  authReducers?: any;
  postReducers?: Posts;
  articleReducers?: ArticleState;
}

export interface Article {
  title: string;
  desc: string;
  content: string;
  tag: string;
  like?: number;
  articleId: string;
  userId: string;
  createdAt: string;
}

export interface Articles extends Array<Article> {}

export interface ArticleState {
  currentArticle: string;
  articles: Articles;
}

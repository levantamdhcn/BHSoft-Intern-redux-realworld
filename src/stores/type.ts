export interface SignInState {
    email: string
    password: string
}

export interface User {
    email: string
    username: string
    password: string
}

export interface Auth {
    isSigninSuccess?: boolean
    isSignUpSuccess?: boolean
    signInErrorMsg?: Array<string>
    signUpErrorMsg?: Array<string>
    currentUser?: {
        authenticated: boolean
        username?: string
    }
}

export interface action {
    type?: string
    payload: any
}

export interface Post {
    title?: string
    description?: string
    body?: string
    createdAt?: string
    tagList?: Array<string>[]
    author?: {
        username?: string
        image?: string
    } 
}

export interface Posts extends Array<Post>{}

export interface AppState {
    authReducers?: any
    postReducers?: Posts
}


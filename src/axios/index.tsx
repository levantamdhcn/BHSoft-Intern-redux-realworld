import axios from "axios"
import { User } from '../stores/index'

export const getPost = () => (
    axios.get('https://api.realworld.io/api/articles?limit=10&offset=0')
)

export const signIn = ({ email, password }: User) => (
    axios.post('https://httpbin.org/post', {
        email,
        password
    })
)
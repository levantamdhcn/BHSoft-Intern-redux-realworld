import axios from "axios"

export const getPost = () => (
    axios.get('https://api.realworld.io/api/articles?limit=10&offset=0')
)

export const signIn = ( email: string, password: string) => (
    axios.post('https://httpbin.org/post', {
        email,
        password
    })
)
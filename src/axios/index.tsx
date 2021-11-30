import axios from "axios"

export const getPost = () => (
    axios.get('https://api.realworld.io/api/articles?limit=10&offset=0')
)
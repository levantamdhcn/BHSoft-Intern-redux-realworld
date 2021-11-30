import { Button, Card } from 'antd'
import { HeartFilled } from '@ant-design/icons';
import React from 'react'
import { Post as PostProps } from '../../../stores/reducers/postReducers'

const Post = (props: PostProps) => {

    const { title, author, tagList, createdAt,description } = props
    return (
        <div>
            <Card 
                style={{ marginTop: 16, borderTop: 'none', borderLeft: 'none', borderRight: 'none'}}
                className='post-container'
            >
                <div className='post-meta'>
                    <a href="#@user" className='post-article'>
                        <img src={ author?.image } alt="avatar"/>
                    </a>
                    <div className="infor">
                        <a href="#@user" className="author">
                            { author?.username }
                        </a>
                        <span className="date">{ createdAt }</span>
                    </div>
                    <div className='post-react'>
                        <Button className='btn btn-primary'>
                            <HeartFilled />
                            53
                        </Button>
                    </div>
                </div>
                <a 
                    href="https://react-redux.realworld.io/#/article/Create-a-new-implementation-1?_k=78fz2w" 
                    className="post-preview"
                >
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                    <div className='post-footer'>
                        <span>Read more...</span>
                        <ul className="tag-list">
                            { tagList ? tagList.map((item: string[],index: number) => {
                                return (
                                    <li className="tag-item" key={index}>
                                        { item }
                                    </li>
                                )
                            }) : ''}
                        </ul>
                    </div>
                </a>
            </Card>
        </div>
    )
}

export default Post

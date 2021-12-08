import React from "react";
import { Posts, Post as PostType } from "../../stores/type";
import Post from "../Post";

interface Props {
  posts: Posts;
}

export const PostsList = ({ posts }: Props) => {
  return (
    <ul className="post-list">
      {posts.map((item: PostType, index: number) => {
        const postInfor = {
          title: item.title,
          author: item.author,
          tagList: item.tagList,
          createdAt: item.createdAt,
          description: item.description,
          id: "",
          favoritesCount: item.favoritesCount,
          favorited: item.favorited,
          slug: item.slug,
          comments: [],
        };
        return (
          <li key={index}>
            <Post
              post={postInfor}
              linkToProfile={
                "https://react-redux.realworld.io/#/@Gerome?_k=9nzvys"
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

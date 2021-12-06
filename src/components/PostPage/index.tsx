import React from "react";
import { useSelector } from "react-redux";
import { Post } from "../../stores/type";
import { ArticleContent } from "../ArticlePage/ArticleContent";
import { PostBanner } from "./PostBanner";

interface PostPageProps {
  slug: string;
}

export const PostPage = ({ slug }: PostPageProps) => {
  const postMeta = useSelector((state: any) => state.postReducers.posts);
  const id = useSelector((state: any) => state.postReducers.currentPostSlug);
  const { body, tagList, comments } = postMeta.filter(
    (item: Post) => item.slug === slug
  )[0];
  return (
    <div>
      <PostBanner slug={slug} postMeta={postMeta} />
      <ArticleContent
        id={id}
        body={body}
        tagList={tagList}
        comments={comments}
      />
    </div>
  );
};

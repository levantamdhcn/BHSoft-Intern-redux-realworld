import React, { useState, useEffect } from "react";
import { TagsHolder, TagList, TagItem } from "../../styled/TagsHolder.styled";

interface PopularTagsProps {
  tagList: Array<string>;
}

const PopularTags = ({ tagList }: PopularTagsProps) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <TagsHolder>
      <h1>Popular Tags</h1>
      <TagList>
        {isLoading
          ? "Loading..."
          : tagList.map((item: string) => {
              return <TagItem key={item}>{item}</TagItem>;
            })}
      </TagList>
    </TagsHolder>
  );
};

export default PopularTags;

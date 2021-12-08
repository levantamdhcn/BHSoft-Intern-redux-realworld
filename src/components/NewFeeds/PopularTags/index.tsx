import React, { useState, useEffect } from "react";

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
    <div className="tags-holder">
      <h1>Popular Tags</h1>
      <ul style={{ paddingLeft: "0", listStyle: "none" }}>
        {isLoading
          ? "Loading..."
          : tagList.map((item: string) => {
              return (
                <li key={item} className="tag-item">
                  {item}
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default PopularTags;

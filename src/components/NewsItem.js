import React from "react";

const NewsItem = ({ item }) => {
  return (
    <div>
      <h5>{item.author}</h5>
    </div>
  );
};

export default NewsItem;

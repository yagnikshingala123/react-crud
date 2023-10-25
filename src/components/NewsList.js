import React from "react";
import "./Styles/NewsList.css"; // Import the CSS file for styles

const NewsList = ({ data }) => {
    console.log(data,"articles");
  return (
    <div className="news-list">
      {data.map((article, index) => (
        <div key={index} className="news-item">
          <img src={article.urlToImage} alt={article.title} className="news-image" />
          <div className="news-details">
            <h2 className="news-title">{article.title}</h2>
            <p className="news-description">{article.description}</p>
            <p className="news-author">{article.author}</p>
            <p className="news-published-at">{new Date(article.publishedAt).toLocaleString()}</p>
            <a href={article.url} className="news-read-more" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import './NewsBoard.css';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchArticles();
  }, [category]);

  return (
    <div className="container">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title || "No Title"}
            description={news.description || "No Description"}
            src={news.urlToImage || "placeholder-image-url"}
            url={news.url}
          />
        ))
      )}
      
    </div>
  );
};



export default NewsBoard;

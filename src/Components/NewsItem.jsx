import React from 'react';
import image from '../assets/news image.jpg';

const NewsItem = ({ title, description, src, url }) => {
  console.log("Imported Image:", image); // For debugging

  return (
    <div className="card bg-dark text-light mb-1 d-inline-block my-2 mx-2 px-1 py-1" style={{ maxWidth: "320px" }}>
      <img 
        src={src ? src : image} 
        onError={(e) => { e.target.src = image; }} // Fallback if image fails to load
        style={{ 
          height: "150px", 
          width: "100%", 
          objectFit: "cover", 
          marginTop: "10px",
        }} 
        className="card-img-top" 
        alt={title ? title : "News image"} 
      />
      <div className="card-body" style={{ padding: "10px" }}>
        <h5 className="card-title" style={{ fontSize: "1rem" }}>
          {title.length > 50 ? `${title.slice(0, 50)}...` : title}
        </h5>
        <p className="card-text" style={{ fontSize: "0.875rem" }}>
          {description ? (description.length > 90 ? `${description.slice(0, 90)}...` : description) : "It is information about something that just happened."}
        </p>
        <a href={url} className="btn btn-primary" style={{ fontSize: "0.875rem" }}>Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;

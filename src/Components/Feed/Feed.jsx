import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Feed = ({ category, searchQuery }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    let url;
    if (searchQuery) {
      // Use YouTube Search API when a search query is provided
      url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(searchQuery)}&key=${API_KEY}`;
    } else {
      url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.items) {
        setData(data.items);
      } else {
        setError("No data found for this category.");
      }
    } catch (error) {
      setError("Failed to fetch data: " + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, searchQuery]);

  return (
    <div className="feed">
      {error && <div className="error-message">{error}</div>}
      {data.map((item, index) => {
        // Videos API: item.id is a string, item.statistics exists
        // Search API: item.id is { videoId: "..." }, no statistics
        const videoId =
          typeof item.id === "string" ? item.id : item.id?.videoId;
        const categoryId = item.snippet?.categoryId || 0;
        const views = item.statistics?.viewCount;
        const channelTitle = item.snippet?.channelTitle || "Unknown";
        const title = item.snippet?.title || "Untitled";
        const publishedAt = item.snippet?.publishedAt;
        const thumbnail =
          item.snippet?.thumbnails?.medium?.url ||
          item.snippet?.thumbnails?.default?.url ||
          "";

        return (
          <Link
            to={`/video/${categoryId}/${videoId}`}
            className="card"
            key={videoId || index}
          >
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <h3>{channelTitle}</h3>
            {views && (
              <p>
                {value_converter(views)} Views &bull;{" "}
                {moment(publishedAt).fromNow()}
              </p>
            )}
            {!views && publishedAt && <p>{moment(publishedAt).fromNow()}</p>}
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;

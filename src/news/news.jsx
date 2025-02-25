import React, { useEffect, useState } from 'react';
import './news.css';

const News = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch('https://portfolio-server-production-93c0.up.railway.app/api/news/', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        setAllNews(data);
      });
  }, []);

  if (!allNews.length) {
    return;
  }
  return (
    <section className="news_section">
      {allNews.map(news => {
        return (
          <div key={news.newsId} className="news_container">
            <img
              className="news_avatar"
              src="/photos/me.jpg"
              alt="my avatar"
              width="40"
              height="40"
            />
            <div className="news_content_container">
              <div className="news_author_name_date">
                <p>Misha • </p>{' '}
                <time className="news_date" dateTime={news.newsDate}>
                  {news.newsDate}
                </time>
              </div>
              <h3 className="news_title">{news.newsTitle}</h3>
              <p className="news_text">{news.newsText}</p>
              <img
                width="600"
                height="600"
                className="news_photo"
                src={`https://portfolio-server-production-93c0.up.railway.app/${news.newsPhotoPath}`}
                alt={news.newsTitle}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default News;

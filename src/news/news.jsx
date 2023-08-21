import React from "react";
import './news.css'
import { useSelector } from "react-redux";
import { allNewsList } from "@/store/selectors";

const News = () => {
    const allNews = useSelector(allNewsList)
    return (
        <section className="news_section">
            {allNews.map(news => {
                return (
                    <div className="news_container">
                        <img className="news_avatar" src="/photos/me.jpg" alt="my avatar" width='40' height='40' />
                        <div className="news_content_container">
                            <div className="news_author_name_date"><p>Misha • </p> <time className="news_date" dateTime={news.newsDate}>{news.newsDate}</time></div>
                            <h3>{news.newsTitle}</h3>
                        </div>
                    </div>
                )
            }
            )}
        </section>
    )
}

export default News
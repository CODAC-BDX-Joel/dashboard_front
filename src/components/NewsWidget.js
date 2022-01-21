import React, {useState, useEffect} from 'react';

const NewsWidget = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=gb&pageSize=5&apiKey=92fb0d77e2f84529ba0eebbe54076d1f');
                if (response.ok && response.status === 200) {
                    setIsLoading(true);
                    const data = await response.json();
                    setNewsData(data);
                    setIsLoading(false)
                } else {
                    setIsLoading(false);
                    throw new Error('Failed to fetch news data');
                }
            } catch (e) {
                setIsLoading(false);
                alert(`Error:${e.message}`)
            }
        };
        fetchNewsData();
    }, [])
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading &&
            <div className='news_widgets_container'>
                <h1>News</h1>
                <div className='news_widgets_wrapper'>
                    {newsData.articles.map(article => {
                        return (
                            <div key={article.url} className='news_widget_container'>
                                <img src={article.urlToImage}/>
                                <h3>{article.title}</h3>
                                <p>{article.description}</p>
                                <h3>{article.source.name}</h3>
                                <a href={article.url} target="_blank">Read this article</a>
                            </div>
                        )
                    })}
                </div>
            </div>
            }

        </div>
    );
};

export default NewsWidget;
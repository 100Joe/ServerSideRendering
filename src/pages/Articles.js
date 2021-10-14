import React, { useState, useEffect } from 'react'

function Articles() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles && articles.map(article => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Articles

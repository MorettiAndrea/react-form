import { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([
    { id: 1, giornale: "corriere dello sport", title: "Serie A" },
    { id: 2, giornale: "il fatto quotidiano", title: "Politica" },
    { id: 3, giornale: "focus", title: "Lo spazio" },
  ]);
  const [newArticles, setNewArticles] = useState("");

  // gestione aggiunta elemento

  const handleNewArticle = (e) => {
    e.preventDefault();
    const newArticle = {
      id: articles.length + 1,
      giornale: "Nuovo Giornale",
      title: newArticles,
    };
    setArticles((prevArticles) => [...prevArticles, newArticle]);
    setNewArticles("");
  };
  // gestione cancellazione
  const handleArticleDelete = (idToDelete) => {
    const updatedArticles = articles.filter((article) => article.id !== idToDelete);
    setArticles(updatedArticles);
  };

  // struttura

  return (
    <main className="custom-container d-flex">
      <div className="form-row">
        <form onSubmit={handleNewArticle}>
          <input type="text" value={newArticles} onChange={(e) => setNewArticles(e.target.value)} />
        </form>
      </div>
      <div>
        <h2>Articoli</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              {article.title}
              <button onClick={() => handleArticleDelete(article.id)}>cancella;</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

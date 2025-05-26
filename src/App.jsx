import React, { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState([
    { id: 1, giornale: "corriere dello sport", title: "Serie A" },
    { id: 2, giornale: "il fatto quotidiano", title: "Politica" },
    { id: 3, giornale: "focus", title: "Scienza" },
  ]);

  // gestione cambio input

  const hadleinputChange = (e) => {
    e.preventDefault();
    const newArticles = { ...articles, [e.target.name]: e.target.title };
    setArticles(newArticles);
    console.log(newArticles);
  };

  // struttura

  return (
    <main className="custom-container d-flex">
      <form>
        <div className="form-row">
          <input type="text" name="Serie A" title={articles.title} onChange={hadleinputChange} />
        </div>
        <div className="form-row">
          <input type="text" name="Politica" title={articles.title} onChange={hadleinputChange} />
        </div>
        <div className="form-row">
          <input type="text" name="Scienza" title={articles.title} onChange={hadleinputChange} />
        </div>
      </form>
    </main>
  );
}

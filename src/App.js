import React, { useState } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page === data.length - 1) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page === 0) {
      setPage(data.length - 1);
    } else {
      setPage(page - 1);
    }
  };

  if (loading) {
    return (
      <div className="section-title">
        <h1>Loading...</h1>
        <div className="underline"></div>
      </div>
    );
  }

  return (
    <main>
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data[page].map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {data.map((followers, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${page === index ? "active-btn" : null}`}
                onClick={() => setPage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;

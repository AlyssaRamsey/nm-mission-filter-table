import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import config from "./config";
import "./App.css";

function App() {
  const [loadedTVShows, setLoadedTVShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch from backend service
    const fetchTVShows = async () => {
      setIsLoading(true);
      const response = await fetch(config.tvSchedule.baseUrl);
      const responseData = await response.json();

      setLoadedTVShows(responseData.tvshows);
      setIsLoading(false);
    };

    fetchTVShows();
  }, []);

  return (
    <React.Fragment>
      <main>
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && (
          <div>
            <Header></Header>
            <Table data={loadedTVShows} />
          </div>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;

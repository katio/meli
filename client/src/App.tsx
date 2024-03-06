import React from 'react';
import StandardLayout from "./layouts/StandardLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<StandardLayout MainContent={<SearchResultsPage />} />}
          />
          <Route
            path="/items"
            element={<StandardLayout MainContent={<SearchResultsPage />} />}
          />
          <Route
            path="/items/:id"
            element={<StandardLayout MainContent={<ItemDetailPage />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

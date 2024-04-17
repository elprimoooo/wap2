import React from 'react';
import { Link } from 'react-router-dom'; // Pokud používáte React Router pro routování

function MainPage() {
  return (
    <div className="main-page">
      <nav>
        <ul>
          <li><Link to="/schejbal">Schejbalove</Link></li>
          <li><Link to="/david">Davidove</Link></li>
          <li><Link to="/pawel">Pawlove</Link></li>
          <li><Link to="/ondra">Ondrove</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MainPage;

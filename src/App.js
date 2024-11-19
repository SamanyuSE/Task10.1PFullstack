// App.js
import React from 'react';
import Navbar from './Navbar';  // Import Navbar component
import Newsletter from './Newsletter'; // Import Newsletter component
import Last from './Last'; // Import Last component
import './App.css'; // Import CSS for custom styles

// Main App component
function App() {
    return (
        <div id="root">
            {/* Navbar */}
              <Navbar />
            <div className="app-container">
                <Newsletter />
            </div>
            <Last />
        </div>
    );
}

export default App;

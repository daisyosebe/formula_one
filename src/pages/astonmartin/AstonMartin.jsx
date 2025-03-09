import React from "react";
import Header from "../../components/header/Header";  // Import Header
import "./AstonMartin.css";

// Exporting functional page
export default function AstonMartinPage() {
  return (
    <main className="container-fluid">
      <Header title="Aston Martin" navbarPosition="top" /> {/* Pass the title and navbar position */}
      <div className="space"></div>
      <h2>Aston Martin</h2>
      <div className="row">
        {/* Content goes here */}
      </div>
    </main>
  );
}

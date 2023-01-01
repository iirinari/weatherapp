import React from "react";
import Search from "./Search";

import Weather from "./Weather";
import Location from "./Location";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Location />
      <Weather />
    </div>
  );
}

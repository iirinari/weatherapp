import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="search-form">
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter city"
            autofocus="on"
            className="form-control"
          />
        </div>
        <div className="col">
          <input type="submit" value="Go" className="btn  w-100 buTTon" />
        </div>
        <div className="col Geo">
          <input type="submit" value="Geolocation" className="btn buT" />
        </div>
      </div>
    </form>
  );
}

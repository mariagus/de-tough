import React from "react";
import "./Expertise.css";
import retail from "./retail.jpg";
import offices from "./offices.jpg";
import residential from "./residential.jpg";

export default function Expertise() {
  return (
    <div className="expertise">
      <h2>Our fields of expertise include...</h2>
      <div className="container2">
        <div className="section">
          <h3>RETAIL</h3>
          <img src={retail} alt="retail" className="img" />
          <ul className="list">
            <li>Food superstores</li>
            <li>Retail outlets</li>
            <li>Retail parks</li>
            <li>Concession units</li>
            <li>Convenience stores</li>
            <li>Distribution centres</li>
            <li>Department stores</li>
            <li>Petrol filling stations</li>
          </ul>
        </div>
        <div className="section">
          <h3>COMMERCIAL</h3>{" "}
          <img src={offices} alt="commercial" className="img" />
          <ul className="list">
            <li>Offices</li>
            <li>Warehouses</li>
            <li>Banks</li>
            <li>Meeting and conference rooms</li>
            <li>Theatres</li>
            <li>Football grounds and stadiums</li>
            <li>Sound recording studios</li>
            <li>Restaurants</li>
            <li>Educational facilities</li>
          </ul>
        </div>
        <div className="section">
          <h3>RESIDENTIAL</h3>
          <img src={residential} alt="residential" className="img" />
          <ul className="list">
            <li>Private houses</li>
            <li>Hotels</li>
            <li>Hostels</li>
            <li>Listed buildings</li>
            <li>Social and general needs housing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

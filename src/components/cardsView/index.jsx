import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CardsView({ products, icon }) {
  return (
    <div className="card-main">
      {products.map((products) =>
        icon === "view_module" ? (
          <div key={uuidv4()} className="card-container">
            <div key={uuidv4()} className="card-item">
              <p key={uuidv4()} className="card-name ">
                {" "}
                {products.name}
              </p>
              <p key={uuidv4()} className="card-color">
                {" "}
                {products.color}
              </p>
              <img
                key={uuidv4()}
                className="card-img"
                src={products.img}
                alt={products.name}
              />
              <div className="card-footer">
                <p className="card-price">${products.price}</p>
                <span className="card-btn-add">Add</span>
              </div>
            </div>
          </div>
        ) : (
          <div key={uuidv4()} className="card-container-view_list">
            <div key={uuidv4()} className="card-item-view_list">
              <img
                key={uuidv4()}
                className="card-img"
                src={products.img}
                alt={products.name}
              />
              <p key={uuidv4()} className="card-name ">
                {" "}
                {products.name}
              </p>
              <p key={uuidv4()} className="card-color">
                {" "}
                {products.color}
              </p>
              <p className="card-price">${products.price}</p>
              <span className="card-btn-add">Add</span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

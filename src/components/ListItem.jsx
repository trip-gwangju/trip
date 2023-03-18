import React from "react";
import { Link } from "react-router-dom";

function ListItem({ list }) {
  if (list.addrRoad === "") {
    return (
      <div key={list.id} className="list">
        <Link to={`/list/${list.id}`}>
          <li className="listItem">
            {list.tourDestNm} ({list.addrJibun})
          </li>
        </Link>
      </div>
    );
  } else {
    return (
      <div key={list.id} className="list">
        <Link to={`/list/${list.id}`}>
          <li className="listItem">
            {list.tourDestNm} ({list.addrRoad})
          </li>
        </Link>
      </div>
    );
  }
}

export default ListItem;

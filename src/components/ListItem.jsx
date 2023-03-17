import React from "react";

function ListItem({ list }) {
  if (list.addrRoad === "") {
    return (
      <div key={list.id} className="list">
        <li className="listItem">
          {list.tourDestNm} ({list.addrJibun})
        </li>
      </div>
    );
  } else {
    return (
      <div key={list.id} className="list">
        <li className="listItem">
          {list.tourDestNm} ({list.addrRoad})
        </li>
      </div>
    );
  }
}

export default ListItem;

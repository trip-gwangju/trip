import React, { useEffect, useState } from "react";
import "../styles/List.css";
import Footer from "../components/Footer";
import axios from "axios";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";

function List() {
  const API_KEY =
    "YAHkF40pRCYGFbXP%2FXeCrB3nJ4B9G9DObwb71txY0kHNQ2bqTcpLBbUDW0wrx%2BQHAYSJiDg8uYoFvsSWKYl3Kw%3D%3D";

  const [lists, setLists] = useState([]);

  const FetchData = async () => {
    await axios
      .get(
        `http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo?serviceKey=${API_KEY}&type=json`
      )
      .then((res) => {
        setLists(res.data.TourDestBaseInfo);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      <div className="listBox">
        <h1><Link to={'/'}>TRIP</Link></h1>
        <div className="listContainer">
          <h1>관광지 목록</h1>
          <ul className="tourList" style={{ listStyle: "none" }}>
            {lists.map((list) => {
              return <ListItem key={list.id} list={list} />;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;

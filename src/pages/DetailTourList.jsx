import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/TourInfoBox.css";

function DetailTourList() {
  const { tour_id } = useParams();
  const API_KEY =
    "YAHkF40pRCYGFbXP%2FXeCrB3nJ4B9G9DObwb71txY0kHNQ2bqTcpLBbUDW0wrx%2BQHAYSJiDg8uYoFvsSWKYl3Kw%3D%3D";
  const [list, setList] = useState([]);
  const FetchData = async () => {
    await axios
      .get(
        `http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo?serviceKey=${API_KEY}&type=json`
      )
      .then((res) => {
        setList(
          res.data.TourDestBaseInfo.filter((item) => item.id === tour_id)
        );
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log(list);

  return (
    <div className="tourInfo">
      <h1 className="LOGO">TRIP</h1>
      <div className="tourInfoBox">
        <h1 className="tourDesNm">{list.tourDestNm}</h1>
        <p>관광지 소개 : {list.tourDestIntro}</p>
        <p>전화번호 : {list.mngAgcTel}</p>
        <p>주소 : </p>
        <p>광관지 구분 : {list.sportsEnterFcltInfo}</p>
        <p>지정일자 : {list.dsgnDate}</p>
      </div>
      <Footer />
    </div>
  );
}

export default DetailTourList;

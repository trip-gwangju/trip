import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/TourInfoBox.css";

function DetailTourList() {
  const { tour_id } = useParams();

  const [deList, setDeList] = useState([]);

  const API_KEY =
    "YAHkF40pRCYGFbXP%2FXeCrB3nJ4B9G9DObwb71txY0kHNQ2bqTcpLBbUDW0wrx%2BQHAYSJiDg8uYoFvsSWKYl3Kw%3D%3D";

  useEffect(() => {
    axios
      .get(
        `http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo?serviceKey=${API_KEY}&type=json`
      )
      .then((res) => {
        console.log(res.data.TourDestBaseInfo);
        setDeList(res.data.TourDestBaseInfo[tour_id - 1]);
      });
  }, [tour_id]);

  return (
    <div className="tourInfo">
      <h1 className="LOGO">
        <Link to={"/"}>TRIP</Link>
      </h1>
      <div className="tourInfoBox">
        <div className="inTourInfoBox">
          <h1 className="tourDesNm">{deList.tourDestNm}</h1>
          <p>관광지 소개 : {deList.tourDestIntro}</p>
          <p>전화번호 : {deList.mngAgcTel}</p>
          <p>
            주소 :{deList.addrRoad === "" ? deList.addrJibun : deList.addrRoad}{" "}
          </p>
          <p>광관지 구분 : {deList.sportsEnterFcltInfo}</p>
          <p>지정일자 : {deList.dsgnDate}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailTourList;

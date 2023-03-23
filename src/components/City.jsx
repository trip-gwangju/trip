import "../styles/city.css";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";

function City() {
  return (
    <div className="cityBox">
      {/* <span class="material-symbols-outlined list">list</span> */}
      <span className="cityName">GwangJu(광주)</span>
      <Link to="/list">
        <AiOutlineSend className="cityButton" />
      </Link>
      <div>
        <h2 className="introText">광주의 관광지들을 만나봐요!</h2>
      </div>
    </div>
  );
}

export default City;

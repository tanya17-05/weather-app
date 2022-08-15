import "./topbar.scss";
import Searchbar from "../searchbar/Searchbar";

const Topbar = ({ searchArray, setSearchArray }) => {
  return (
    <div className="topbar">
      <div className="logo">Weather</div>
      <Searchbar searchArray={searchArray} setSearchArray={setSearchArray}  />
    </div>
  );
};

export default Topbar;

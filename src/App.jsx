import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./Components/TVShowDetail/TVShowDetail";
import { Logo } from "./Components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./Components/TVShowListItem/TVShowListItem";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();

    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  function setTVShowFromRecommendation(tvShow)
  {
    alert(JSON.stringify(tvShow))
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : `black`,
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title="Watowatch"
              subtitle="Find a show youmay like"
              image={logo}
            />
          </div>

          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {currentTVShow && <TVShowListItem tvShow={currentTVShow} onClick={setTVShowFromRecommendation}/>}
      </div>
    </div>
  );
}

import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div className={s.container} onClick={() => onClick(tvShow)}>
      {tvShow.backdrop_path && (
        <img
          className={s.image}
          alt={tvShow.name}
          src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        />
      )}
      {!tvShow.backdrop_path && <div className={s.backboneImage} />}
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}

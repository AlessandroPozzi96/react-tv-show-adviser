import { FiveStarsRating } from "../FiveStarsRating/FiveStarsRating";
import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  const rating = Math.round(tvShow.vote_average / 2);

  return (
    <>
      <div className={s.title}>{tvShow.name}</div>

      <div className={s.rating_container}>
        <FiveStarsRating rating={rating} />
        <div className={s.rating}>{rating} / 5</div>
      </div>

      <div className={s.overview}>{tvShow.overview}</div>
    </>
  );
}

import s from "./style.module.css";
import { Star as StarEmpty, StarFill, StarHalf } from "react-bootstrap-icons";

export function FiveStarsRating({ rating }) {
  const starList = [];
  const starFillCount = Math.floor(rating);
  const hasStarHalf = rating - starFillCount >= 0.5;
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div className={s.container}>{starList}</div>;
}

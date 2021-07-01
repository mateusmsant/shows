import React from "react";
import empty from "../../components/res/empty.svg";

interface PropsType {
  message: string;
}

export default function NotFound(props: PropsType) {
  return (
    <div className="no-fav">
      <p className="text-empty">{props.message}</p>
      <img src={empty} alt="No favorites" className="empty" />
    </div>
  );
}

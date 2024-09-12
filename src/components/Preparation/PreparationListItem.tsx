import type { ReactNode } from "react";

export default function PreparationListItem(props: {
  prep?: ReactNode;
  time?: ReactNode;
}) {
  return (
    <li>
      <strong className="font-outfit-medium">{props.prep}</strong>
      <span className="font-outfit-light">: {props.time}</span>
    </li>
  );
}

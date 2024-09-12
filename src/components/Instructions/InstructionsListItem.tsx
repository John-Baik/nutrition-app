import type { ReactNode } from "react";

export default function InstructionsListItem(props: {
  step?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <li className="pl-4">
      <strong className="font-outfit-medium">{props.step}</strong>
      <span className="font-outfit-light">: {props.description}</span>
    </li>
  );
}

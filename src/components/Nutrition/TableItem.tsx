import classNames from "classnames";
import type { ReactNode } from "react";

export default function TableItem(props: {
  nutrition?: ReactNode;
  value?: ReactNode;
  last?: boolean;
}) {
  return (
    <tr className={classNames(!props.last && "border-b")}>
      <td className="px-4 py-4 font-outfit-light">{props.nutrition}</td>
      <td className="px-4 font-bold text-[#824731] py-2">{props.value}</td>
    </tr>
  );
}

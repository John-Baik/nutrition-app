import type { ReactNode } from "react";

export default function SharedContainer(props: { children?: ReactNode }) {
  return (
    <span className="text-2xl text-[#824731] font-young font-light">
      {props.children}
    </span>
  );
}

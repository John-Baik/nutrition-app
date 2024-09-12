import type { ReactNode } from "react";

export default function SharedContainer(props: { children?: ReactNode }) {
  return (
    <div className="flex flex-col border-b pb-8 gap-7">{props.children}</div>
  );
}

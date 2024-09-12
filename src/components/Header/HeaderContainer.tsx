import type { ReactNode } from "react";

export default function HeaderContainer(props: { children?: ReactNode }) {
  return <div className="flex flex-col gap-7">{props.children}</div>;
}

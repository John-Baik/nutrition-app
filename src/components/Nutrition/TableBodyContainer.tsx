import type { ReactNode } from "react";

export default function TableBodyContainer(props: { children?: ReactNode }) {
  return <tbody>{props.children}</tbody>;
}

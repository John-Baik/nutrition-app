import type { ReactNode } from "react";

export default function NutritionContainer(props: { children?: ReactNode }) {
  return <div className="flex flex-col gap-7">{props.children}</div>;
}

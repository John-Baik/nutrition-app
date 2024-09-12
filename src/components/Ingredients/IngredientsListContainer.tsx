import type { ReactNode } from "react";

export default function IngredientsListContainer(props: {
  children?: ReactNode;
}) {
  return (
    <ul className="flex font-outfit-light flex-col gap-3 marker:text-[#682F48] list-disc list-inside">
      {props.children}
    </ul>
  );
}

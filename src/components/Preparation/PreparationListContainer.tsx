import type { ReactNode } from "react";

export default function PreparationListContainer(props: {
  children?: ReactNode;
}) {
  return (
    <ul className="list-disc pl-4 flex flex-col gap-2 list-inside">
      {props.children}
    </ul>
  );
}

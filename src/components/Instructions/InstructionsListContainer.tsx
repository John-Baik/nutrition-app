import type { ReactNode } from "react";

export default function InstructionsListContainer(props: {
  children?: ReactNode;
}) {
  return (
    <ol className="flex flex-col gap-3 marker:font-bold marker:text-[#682F48] list-decimal pl-4 list-outside">
      {props.children}
    </ol>
  );
}

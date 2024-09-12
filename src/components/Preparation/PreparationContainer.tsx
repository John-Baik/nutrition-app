import type { ReactNode } from "react";

export default function PreparationContainer(props: { children?: ReactNode }) {
  return (
    <div className="flex p-5 bg-[#FFF6FB] rounded-lg flex-col gap-3">
      {props.children}
    </div>
  );
}

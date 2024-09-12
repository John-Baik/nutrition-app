import type { ReactNode } from "react";

export default function TableContainer(props: { children?: ReactNode }) {
  return (
    <table className="min-w-full border-collapse border-gray-300">
      {props.children}
    </table>
  );
}

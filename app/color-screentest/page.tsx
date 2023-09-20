import React from "react";
import SetScrollBarColor from "../components/SetScrollBarColor";

export default function ColorScreentest() {
  return (
    <>
      <SetScrollBarColor color="#C0CBD0" />
      <div className="min-h-[110vh]">page</div>
    </>
  );
}

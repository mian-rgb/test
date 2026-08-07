import React from "react";

/*
  Issues:
  - Uses a div with role="button" and onclick (not keyboard accessible)
  - No aria-label (icon-only semantics)
*/
export default function BrokenButton({ onClick }) {
  return <div role="button" onClick={onClick} className="icon-btn" />;
}

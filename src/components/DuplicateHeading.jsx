import React from "react";

/*
  Issues:
  - Duplicate H1 headings (semantic/SEO & accessibility problem)
*/
export default function DuplicateHeading() {
  return (
    <header>
      <h1>Site Title</h1>
      <h1>Another Title</h1>
    </header>
  );
}

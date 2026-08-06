import React from "react";

/*
  Issues:
  - Rendering a list without stable keys (performance / reconciliation issues)
*/
export default function NoKeyList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li>{i}</li> // missing key
      ))}
    </ul>
  );
}

import React, { useState } from "react";

/*
  Issues:
  - Uses eval on user input (security risk). Scanners should flag use of eval/exec.
*/
export default function EvalWidget() {
  const [input, setInput] = useState("2+2");
  const [result, setResult] = useState(null);

  const run = () => {
    // intentionally insecure
    // eslint-disable-next-line no-eval
    setResult(eval(input));
  };

  return (
    <div>
      <input aria-label="expr" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={run}>Run</button>
      <div>Result: {String(result)}</div>
    </div>
  );
}

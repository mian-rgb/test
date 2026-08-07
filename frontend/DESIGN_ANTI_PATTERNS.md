# Design issues we want the UXPilot design reviewer to detect

This file lists the intentionally-inserted UI/UX anti-patterns present in frontend/ so you can confirm UXPilot flags them:

- Missing viewport meta in index.html (responsiveness)
- Images without alt text, or empty alt attributes where decorative is ambiguous
- Duplicate id attributes on links
- Non-descriptive link text: "click here"
- Use of <div role="button"> rather than a native <button>
- Inline JS and inline styles (should be separated)
- Low color contrast (h3 color #999 on white)
- Fixed width container and use of !important
- Icon-only control without aria-label or keyboard support (IconButton.jsx)
- Duplicate H1 elements and incorrect heading structure (Header.jsx)
- Use of <b> instead of <strong>
- Hidden interactive element via CSS (button off-screen incorrectly)

Run manual checks or re-run UXPilot automatic review after pushing to see findings.

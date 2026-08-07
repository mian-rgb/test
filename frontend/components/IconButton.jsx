import React from 'react'

export default function IconButton({onClick}) {
  // Icon-only control without aria-label or keyboard support
  return <span role="button" onClick={onClick} className="icon-btn" />
}

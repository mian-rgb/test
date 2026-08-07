import React from 'react'

export default function Header(){
  return (
    <header>
      <h1>Main Title</h1>
      <h1>Another title</h1> {/* duplicate H1 */}
      <a href="#" aria-hidden="true">Hidden link</a> {/* link hidden from assistive tech */}
    </header>
  )
}

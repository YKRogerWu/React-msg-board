import React from 'react'

export default function Footer() {
  const currentDate = new Date().getFullYear()
    return (
    <footer>
        <p>Copyright © Kepper {currentDate}</p>
    </footer>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { bgSecondary } from '@/lib/constants'

export default function Header() {
  const [offset, setOffset] = useState(0)
  const [show, setShow] = useState(true)
  const [showBg, setShowBg] = useState(false)

  function onScroll() {
    let scroll = window.scrollY
    setOffset((val) => {
      if (val > scroll) {
        setShow(true)
      } else {
        if (scroll > 100) {
          setShow(false)
        }
      }
      return scroll
    })

    if (scroll > 100) {
      setShowBg(true)
    } else {
      setShowBg(false)
    }
  }

  useEffect(() => {
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={`max-w-screen-2xl mx-auto z-50 top-0 transition-all duration-300 
      ${showBg ? bgSecondary : null} 
      ${!show ? 'opacity-0 -translate-y-4' : null}`}
    >
      <div className="mx-auto px-6 md:px-12 py-3 text-center md:justify-between md:flex">
        <div className="font-semibold text-white text-xl cursor-default mb-3 md:mb-0 ">
          Balathanusan Jeyarasan
        </div>
        <div className="space-x-3 md:space-x-6">
          <span
            onClick={() => goTo('highlights')}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Highlights
          </span>
          <span
            onClick={() => goTo('skills')}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Skills
          </span>
          <span
            onClick={() => goTo('experience')}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Experience
          </span>
          <span
            onClick={() => goTo('contact')}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Contact
          </span>
        </div>
      </div>
    </div>
  )
}


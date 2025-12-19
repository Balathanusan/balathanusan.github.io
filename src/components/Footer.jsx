'use client'

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex justify-center">
      <p className="text-white/50 text-sm text-center">
        All rights reserved &copy; <span>{new Date().getFullYear()}</span>{' '}
        <a href="/" className="text-white/80">
          balathanusan.github.io
        </a>
        .
      </p>
    </div>
  )
}


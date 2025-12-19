'use client'

import { useFirebase } from '@/lib/firebase'
import { myEmail, myLinkedIn, myGitHub, myTwitter } from '@/lib/constants'

export default function Hero() {
  const fb = useFirebase()

  function viewed(site) {
    if (fb) {
      fb.updateDoc(fb.doc(fb.db, 'Views', fb.docRef.id), {
        viewed: fb.arrayUnion(site),
      })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 flex flex-col sm:flex-row gap-3 md:gap-6">
      <div className="flex-1 flex items-center">
        <div className="w-full">
          <div className="font-medium md:text-lg text-white/80">
            Hi, I'm Balathanusan
          </div>
          <div className="font-bold text-3xl md:text-5xl mt-2">
            Software Developer
          </div>
          <p className="text-white/80 md:text-lg font-medium max-w-lg mt-2">
            A passionate Engineer with 4+ years of professional experience
            crafting modern, dynamic and responsive user interfaces.
          </p>
          <div className="mt-8 flex gap-4 items-center">
            <a
              onClick={() => viewed('LinkedIn')}
              className="transition-all opacity-70 hover:opacity-100 hover:scale-125"
              target="_blank"
              href={myLinkedIn}
              rel="noopener noreferrer"
            >
              <img className="w-6" src="/assets/icons/logo-linkedin.svg" alt="LinkedIn" />
            </a>
            <a
              onClick={() => viewed('Github')}
              className="transition-all opacity-70 hover:opacity-100 hover:scale-125"
              target="_blank"
              href={myGitHub}
              rel="noopener noreferrer"
            >
              <img className="w-6" src="/assets/icons/logo-github.svg" alt="GitHub" />
            </a>
            <a
              onClick={() => viewed('Twitter')}
              className="transition-all opacity-70 hover:opacity-100 hover:scale-125"
              target="_blank"
              href={myTwitter}
              rel="noopener noreferrer"
            >
              <img className="w-6" src="/assets/icons/logo-twitter.svg" alt="Twitter" />
            </a>
            <a
              onClick={() => viewed('Email')}
              className="transition-all opacity-70 hover:opacity-100 hover:scale-125"
              href={'mailto:' + myEmail}
            >
              <img className="w-6" src="/assets/icons/mail.svg" alt="Email" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          className="w-full max-w-96 md:max-w-xl shadow-lg object-cover"
          src="/assets/profile-grad.png"
          alt="Profile"
        />
      </div>
    </div>
  )
}


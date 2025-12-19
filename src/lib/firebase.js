'use client'

import { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from 'firebase/firestore'

let firebaseInitialized = false
let fbInstance = null

export function useFirebase() {
  const [fb, setFb] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    if (
      window.location.hostname === 'balathanusan.github.io' &&
      window.location.hash !== '#admin'
    ) {
      if (!firebaseInitialized) {
        const firebaseConfig = {
          apiKey: 'AIzaSyCPMTMNBBFi13ZjAsJ4WpXZH-xS9ht15vI',
          authDomain: 'portfolio-1f7d2.firebaseapp.com',
          projectId: 'portfolio-1f7d2',
          storageBucket: 'portfolio-1f7d2.appspot.com',
          messagingSenderId: '631767602765',
          appId: '1:631767602765:web:b61f898e8bf5bf6b036e04',
        }

        const app = initializeApp(firebaseConfig)
        const db = getFirestore(app)

        addDoc(collection(db, 'Views'), {
          platform: window.navigator.platform,
          vendor: window.navigator.vendor,
          language: window.navigator.language,
          screen: `${window.screen.availWidth}px * ${window.screen.availHeight}px`,
          timestamp: serverTimestamp(),
        })
          .then((docRef) => {
            fbInstance = {
              db,
              docRef,
              doc,
              updateDoc,
              arrayUnion,
              serverTimestamp,
            }
            setFb(fbInstance)
            firebaseInitialized = true
          })
          .catch(() => {
            // Silent fail
          })
      } else if (fbInstance) {
        setFb(fbInstance)
      }
    }
  }, [])

  return fb
}


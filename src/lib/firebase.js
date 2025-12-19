'use client'

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

let fbInstance = null
let initPromise = null

export async function initializeFirebase() {
  // Return existing instance if already initialized
  if (fbInstance) {
    return fbInstance
  }

  // Return existing promise if initialization is in progress
  if (initPromise) {
    return initPromise
  }

  // Start initialization
  initPromise = (async () => {
    if (typeof window === 'undefined') return null

    if (
      window.location.hostname === 'balathanusan.github.io' &&
      window.location.hash !== '#admin'
    ) {
      try {
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

        const docRef = await addDoc(collection(db, 'Views'), {
          platform: window.navigator.platform,
          vendor: window.navigator.vendor,
          language: window.navigator.language,
          screen: `${window.screen.availWidth}px * ${window.screen.availHeight}px`,
          timestamp: serverTimestamp(),
        })

        fbInstance = {
          db,
          docRef,
          doc,
          updateDoc,
          arrayUnion,
          serverTimestamp,
        }
        return fbInstance
      } catch (error) {
        // Silent fail
        initPromise = null
        return null
      }
    }
    return null
  })()

  return initPromise
}

export function getFirebase() {
  return fbInstance
}



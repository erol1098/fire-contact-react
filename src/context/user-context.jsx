import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()
export const UserContextProvider = (props) => {
  const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
    appId: process.env.REACT_APP_APP_ID
  })

  const [db, setDb] = useState()
  useEffect(() => {
    setDb(getFirestore(app))
  }, [app])

  const [contacts, setContacts] = useState([])
  const values = { db, contacts, setContacts }

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  )
}
export default UserContext

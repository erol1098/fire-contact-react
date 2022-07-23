import { createContext, useState, useEffect } from 'react'
import useFirebase, { initialize } from 'auth-web-firebase'
const AuthContext = createContext()

export const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState()
  const [collectionName, setCollectionName] = useState()
  const { userObserver, userInfo } = useFirebase(auth) //! example
  useEffect(() => {
    setCollectionName(userInfo?.uid)
  }, [userInfo])
  useEffect(() => {
    const result = initialize({
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_STORAGE_BUCKET,
      appId: process.env.REACT_APP_APP_ID
    })
    userObserver(result)
    setAuth(result)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const values = { userInfo, auth, collectionName }

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  )
}

export default AuthContext

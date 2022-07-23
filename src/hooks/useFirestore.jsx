import UserContext from '../context/user-context'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { useContext } from 'react'

const useFirestore = () => {
  const { db, setContacts } = useContext(UserContext)

  const addNewEntry = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data)
      console.log('Document written with ID: ', docRef.id)
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }
  const getEntries = async (collectionName) => {
    console.log(!!db)
    try {
      const querySnapshot = await getDocs(collection(db, collectionName))
      // setContacts(querySnapshot)
      console.log(querySnapshot.docs)
      setContacts(
        querySnapshot.docs?.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`)
      // })
    } catch (error) {
      console.error('Error reading document: ', error)
    }
  }

  return { addNewEntry, getEntries }
}

export default useFirestore

import UserContext from '../context/user-context'
import { doc, setDoc, collection, addDoc } from 'firebase/firestore'
import { useContext } from 'react'

const useFirestore = () => {
  const { db } = useContext(UserContext)

  const addNewEntry = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return { addNewEntry }
}

export default useFirestore

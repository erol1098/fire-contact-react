import UserContext from '../context/user-context'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { useCallback, useContext } from 'react'

const useFirestore = () => {
  const { db, setContacts, setLoading } = useContext(UserContext)

  const addNewEntry = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data)
      console.log('Document written with ID: ', docRef.id)
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }
  const getEntries = useCallback(
    async (collectionName) => {
      setLoading(true)
      try {
        const querySnapshot = await getDocs(collection(db, collectionName))
        setContacts(
          querySnapshot?.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
        console.log(`Colllection "${collectionName}" readed from db`)
      } catch (error) {
        console.error('Error reading document: ', error)
      } finally {
        setLoading(false)
      }
    },
    [db, setContacts, setLoading]
  )

  const deleteEntry = async (collectionName, selectedId) => {
    await deleteDoc(doc(db, collectionName, selectedId))
  }

  return { addNewEntry, getEntries, deleteEntry }
}

export default useFirestore

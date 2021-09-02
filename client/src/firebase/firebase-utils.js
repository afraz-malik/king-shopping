import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyB9yhs9BJItMJJLQ93DAugkwQPHS-e3p3U',
  authDomain: 'crown-db-69.firebaseapp.com',
  projectId: 'crown-db-69',
  storageBucket: 'crown-db-69.appspot.com',
  messagingSenderId: '123117840144',
  appId: '1:123117840144:web:064bcf4b1182a5aa89e795',
  measurementId: 'G-XBHL6EW0FG',
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const isUserAuthenticated = () => {
  return new Promise((res, rej) => {
    const unsub = auth.onAuthStateChanged((user) => {
      unsub()
      res(user)
    }, rej)
  })
}
export const createUserInFirestore = async (user, additionalData) => {
  if (!user) {
    console.log('No user found')
    return
  }
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = user
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('eoorr', error.message)
    }
  }
  return userRef
}
// export const addCollAndDocToFirebase = async (collectionName, objectToAdd) =>{
//   const collectionRef = firestore.collection(collectionName);
//   const batch = firestore.batch();
//   objectToAdd.forEach(obj => {
//     const docRef = collectionRef.doc(`${obj.id}`);
//     batch.set(docRef, obj)
//     console.log(obj.id)
//   });
//   return await batch.commit().then(resp => console.log(resp))
// }
export const getShopDataFromFirestore = async () => {
  const collRef = firestore.collection(`shopData`)
  const snapShot = await collRef.get()
  const convertedColl = snapShot.docs.map((doc) => {
    const { title, items, imgUrl } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
      imgUrl,
    }
  })
  const convertedCollToObj = convertedColl.reduce((acc, coll) => {
    acc[coll.title.toLowerCase()] = coll
    return acc
  }, {})
  return convertedCollToObj
}

export const addItemInFirestore = async (ref, collectionToAdd, itemToAdd) => {
  const dbRef = firestore.collection('shopData').doc(ref.toString())
  if (collectionToAdd) {
    await dbRef
      .set({
        title: collectionToAdd.collectionName,
        imgUrl: collectionToAdd.collectionImageUrl,
        items: [
          {
            id: 1,
            name: itemToAdd.name,
            imageUrl: itemToAdd.imageUrl,
            price: itemToAdd.price,
          },
        ],
      })
      .then(() => {
        console.log('Document successfully written!')
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  } else {
    await dbRef
      .update({
        items: firebase.firestore.FieldValue.arrayUnion(itemToAdd),
      })
      .then(() => {
        console.log('data saved successfully')
      })
      .catch((error) => {
        console.error('data saved failed', error)
      })
  }
}

export default firebase

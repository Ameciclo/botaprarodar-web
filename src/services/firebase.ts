import firebase from 'firebase'

const firebaseConnect = () => {
  try {
    return firebase
      .initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        databaseURL: 'https://bpr-dev.firebaseio.com/',
        projectId: process.env.FIREBASE_PROJECT_ID
      })
      .database()
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
}

type GetDataProps = {
  nodePath: string
  limit?: number
}

export const getData = (
  { nodePath, limit = 10 }: GetDataProps,
  cb: (data) => void
) => {
  const query = Firebase.ref(nodePath).limitToFirst(limit)

  query.on('value', (dataSnapshot) => {
    const items = []

    dataSnapshot.forEach((childSnapshot) => {
      const item = childSnapshot.val()
      item['key'] = childSnapshot.key
      items.push(item)
    })

    cb(items)
  })
}

export const Firebase = firebaseConnect()

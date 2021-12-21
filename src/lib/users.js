import firestore from '@react-native-firebase/firestore';

export const usersCollection = firestore().collection('users');

export function createUser({id, nickname, photoURL, phoneNumber}) {
  return usersCollection.doc(id).set({
    id,
    nickname,
    photoURL,
    phoneNumber,
  });
}

export async function getUser(id) {
  const doc = await usersCollection.doc(id).get();
  return doc.data();
}

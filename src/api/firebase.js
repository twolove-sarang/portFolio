import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref, remove, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function updateContact(text) {
  const id = uuid();

  const dateCheck = new Date();
  const date = dateCheck.getDate();
  const month = dateCheck.getMonth();
  const year = dateCheck.getFullYear();

  const date2 = `${year}-${month}-${date}`;
  const { nickname, comment } = text;
  return set(ref(database, `comment/${id}`), {
    nickname: nickname,
    comment: comment,
    date: date2,
    id: id,
  });
}

export async function viewContact() {
  return get(ref(database, `comment`)) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
}

export async function deleteContact(id) {
  return remove(ref(database, `comment/${id}`));
}

export async function updateWorkContact(workContact, button) {
  const id = uuid();
  const { name, contact, dateStart, dateEnd } = workContact;
  return set(ref(database, `workcontact/${id}`), {
    id: id,
    name: name,
    contact: contact,
    dateStart: dateStart,
    dateEnd: dateEnd,
    button: button,
  });
}

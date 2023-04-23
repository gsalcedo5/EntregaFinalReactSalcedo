/* -------- FIREBASE ------- */
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEfMfbp8xzjC3FVdNHk4kisb2KTz5FCDQ",
  authDomain: "entregafinalreactsalcedo.firebaseapp.com",
  projectId: "entregafinalreactsalcedo",
  storageBucket: "entregafinalreactsalcedo.appspot.com",
  messagingSenderId: "148797341658",
  appId: "1:148797341658:web:81ecfbb9c34eeca7fa4ae3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems(){
  const productsRef = collection(db,"products");

  const productsSnap = await getDocs(productsRef);
  const documents = productsSnap.docs;

 const docsData= documents.map((doc) =>{
  return{ id:doc.id, ...doc.data()  } 
});

 return docsData;
}

export async function getSingleItem(pokeid){
    const docRef = doc(db, "products", pokeid);
    const docSnap = await getDoc(docRef);
    return{ id: docSnap.id, ...docSnap.data()  } 

}
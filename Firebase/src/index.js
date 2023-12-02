import {initializeApp} from 'firebase/app'
import{
    getFirestore, collection, getDocs
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCwIMIDKwIgrJoqcj-OTkxSwr9IAd1hogY",
    authDomain: "fir-demo-37f1e.firebaseapp.com",
    projectId: "fir-demo-37f1e",
    storageBucket: "fir-demo-37f1e.appspot.com",
    messagingSenderId: "755359631624",
    appId: "1:755359631624:web:834603632c79a0541a44bd"
  };

  //init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collectio ref
const collRef = collection(db, 'books')


//get collection data

getDocs(collRef)
  .then((snapshot)=>{
    let books =[]
    snapshot.docs.forEach((doc)=>
    {
        books.push({...doc.data(),id:doc.id})
    })
    console.log(books)
    
  } )
  .catch(err=>
    {
        console.log(err.message)
    })
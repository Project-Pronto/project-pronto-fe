import firebase from '../firebase'

export function getTasks(){
    db.collection("Tasks").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data())
}}
       
    

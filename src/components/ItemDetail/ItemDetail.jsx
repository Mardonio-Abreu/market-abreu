import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function ItemDetail() {
  let itemId = useParams();
  const [item, setItem] = useState();
  const docRef = doc(db, "items", itemId);

  useEffect(() => {
    const getItems = async () => {
      const docSnap = await getDoc(docRef);
      /* if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setItem(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      } */
      setItem(docSnap);
    };

    getItems();
    console.log(item);
  }, [item, docRef]);

  return <h1>Surprise MotherFather!</h1>;
}

export default ItemDetail;

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function ItemDetail() {
  let { itemId } = useParams();
  const [item, setItem] = useState([]);
  const docRef = doc(db, "items", 1);

  useEffect(() => {
    const getItems = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setItem(docSnap.data());
        console.log(docSnap.data);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setItem(docSnap);
    };

    getItems();
    console.log(item);
  }, [item, itemId, docRef]);

  return (
    <div>
      {item ? (
        <>
          <h1>Item Detail</h1>
          <p>Item Name: {item.item}</p>
          <p>Item Description: {item.description}</p>
          {/* Agrega más campos aquí según tu estructura de datos */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemDetail;

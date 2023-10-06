import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const docRef = doc(db, "items", id);

  useEffect(() => {
    const getItems = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
      setItem(docSnap.data());
    };

    getItems();
    console.log(item);
  }, []);

  return (
    <div>
      {item ? (
        <>
          <h1>Item Detail</h1>
          <p>Item Name: {item.price}</p>
          <p>Item Description: {item.description}</p>
          {/* Agrega más campos aquí según tu estructura de datos */}
        </>
      ) : (
        <p>The item doesn't exist...</p>
      )}
    </div>
  );
}

export default ItemDetail;

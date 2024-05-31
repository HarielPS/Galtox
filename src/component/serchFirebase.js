import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Ajusta la ruta según la ubicación de tu archivo firebaseConfig.js

export async function findWalletAddress(walletAddress) {
  const usersCollection = collection(db, 'usuarios');
  const q = query(usersCollection, where('walletAddress', '==', walletAddress));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    } else {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      return querySnapshot.docs.map(doc => doc.data());
    }
  } catch (error) {
    console.error("Error finding document: ", error);
    return null;
  }
}

export async function findUserIdByWalletAddress(walletAddress) {
  const usersCollection = collection(db, 'usuarios');
  const q = query(usersCollection, where('walletAddress', '==', walletAddress));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    } else {
      // Solo se espera un documento que coincida, por lo que solo devolvemos el ID del primer documento encontrado
      const firstDoc = querySnapshot.docs[0];
      return firstDoc.id;
    }
  } catch (error) {
    console.error("Error finding document: ", error);
    return null;
  }
}
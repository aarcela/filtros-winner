import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { firestore } from "./../../../firebase";

export const getAllProducts = async () => {
  const q = collection(firestore, "product");
  const querySnapshot = await getDocs(q);
  const product = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  return product;
};

export const getProductById = async (collentionName: string, docId: string) => {
  const docRef = doc(firestore, collentionName, docId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const addProduct = async (productData: any) => {
  try {
    const docRef = await addDoc(collection(firestore, "product"), productData);
    console.log("Document written with ID: ", docRef.id);
    return { status: true, doc: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { status: false };
  }
};

export async function searchDocumentsByProperty(productID: string) {
  const q = query(collection(firestore, "product"), where("id", "==", productID));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No documents found matching the query.");
    return [];
  }
  return querySnapshot.docs.map((doc) => doc.id);
}

export const updateProduct = async (id: string, updatedProduct: any) => {
  try {
    const productRef = doc(firestore, "product", id);
    await updateDoc(productRef, updatedProduct);
    return { status: true, doc: id };
  } catch {
    return { status: false, doc: id };
  }
};

export const deleteProduct = async (id: any) => {
  const productRef = doc(firestore, "product", id);
  await deleteDoc(productRef);
  console.log("Product deleted");
};

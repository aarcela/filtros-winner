import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { firestore } from "./../../../firebase";
import { Product } from "@/models/product";

export const getAllProducts = async () => {
  const q = query(collection(firestore, "product"));
  const querySnapshot = await getDocs(q);
  let product: any[] = [];
  querySnapshot.forEach((doc) => {
    product.push({ id: doc.id, ...doc.data() });
  });
  return product;
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
    return []; // Return an empty array if no documents are found
  }
  return querySnapshot.docs.map((doc) => doc.id); // Return an array of document data objects
}

export const updateProduct = async (id: any, updatedProduct: any) => {
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

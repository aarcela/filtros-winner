import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
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
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateProduct = async (id: any, updatedProduct: any) => {
  const productRef = doc(firestore, "product", id);
  await updateDoc(productRef, updatedProduct);
  console.log("Vehicle successfully updated");
};

export const deleteProduct = async (id: any) => {
  const productRef = doc(firestore, "product", id);
  await deleteDoc(productRef);
  console.log("Product deleted");
};

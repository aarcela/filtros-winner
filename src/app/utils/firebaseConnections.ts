import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { firestore, storage } from "./../../../firebase";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";

export const getAllElements = async (database: string) => {
  const query = collection(firestore, database);
  const querySnapshot = await getDocs(query);
  const product = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
  return product;
};

export const addElement = async (collectionName: string, elementData: any) => {
  try {
    const docRef = await addDoc(collection(firestore, collectionName), elementData);
    console.log("Document written with ID: ", docRef.id);
    return { status: true, doc: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { status: false };
  }
};

export const updateElement = async (collectionName: string, id: string, updatedProduct: any) => {
  try {
    const productRef = doc(firestore, collectionName, id);
    await updateDoc(productRef, updatedProduct);
    return { status: true, doc: id };
  } catch {
    return { status: false, doc: id };
  }
};

export const getElementById = async (collectionName: string, docId: string) => {
  const docRef = doc(firestore, collectionName, docId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const getElementsByProperty = async (collectionName: string, property: string, searchTerm: string) => {
  const q = query(collection(firestore, collectionName), where(property, ">=", searchTerm));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No documents found matching the query.");
    return [];
  }
  return querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
};

export const addImages = async (image: any, imageName: string) => {
  const storageRef = ref(storage, `products/${new Date().getTime()}-${imageName}`);
  await uploadBytesResumable(storageRef, image);
  const imageUrl = await getDownloadURL(storageRef);
  return imageUrl;
};

import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { firestore } from "./../../../firebase";
import { Vehicle } from "@/models/vehicle";

export const getAllVehicles = async () => {
  const q = query(collection(firestore, "vehicle"));
  const querySnapshot = await getDocs(q);
  let vehicles: any[] = [];
  querySnapshot.forEach((doc) => {
    vehicles.push({ id: doc.id, ...doc.data() });
  });
  return vehicles;
};

export const addVehicle = async (vehicleData: any) => {
  try {
    const docRef = await addDoc(collection(firestore, "vehicle"), vehicleData);
    console.log("Document written with ID: ", docRef.id);
    return { status: true, doc: docRef.id };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { status: false };
  }
};

export const updateVehicle = async (id: any, updatedVehicle: any) => {
  const vehicleRef = doc(firestore, "vehicle", id);
  await updateDoc(vehicleRef, updatedVehicle);
  console.log("Vehicle successfully updated");
};

export const deleteVehicle = async (id: any) => {
  const vehicleRef = doc(firestore, "vehicle", id);
  await deleteDoc(vehicleRef);
  console.log("Vehicle deleted");
};

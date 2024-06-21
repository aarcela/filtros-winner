import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { firestore } from "./../../../firebase";
import { Vehicle } from "@/models/vehicle";

export const getAllVehicles = async () => {
  const q = query(collection(firestore, "vehicles"));
  const querySnapshot = await getDocs(q);
  let vehicles: any[] = [];
  querySnapshot.forEach((doc) => {
    vehicles.push({ id: doc.id, ...doc.data() });
  });
  return vehicles;
};

export const addVehicle = async (vehicleData: any) => {
  try {
    const docRef = await addDoc(collection(firestore, "vehicles"), vehicleData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateVehicle = async (id: any, updatedVehicle: any) => {
  const vehicleRef = doc(firestore, "vehicles", id);
  await updateDoc(vehicleRef, updatedVehicle);
  console.log("Vehicle successfully updated");
};

export const deleteVehicle = async (id: any) => {
  const vehicleRef = doc(firestore, "vehicles", id);
  await deleteDoc(vehicleRef);
  console.log("Vehicle deleted");
};

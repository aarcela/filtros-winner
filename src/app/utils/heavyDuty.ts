import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { HeavyDuty } from "@/models/heavy-duty";

export const getAllHeavyDuty = async () => {
    const q = query(collection(firestore, "heavy-duty"));
    const querySnapshot = await getDocs(q);
    let heavyDuty: any[] = [];
    querySnapshot.forEach((doc) => {
        heavyDuty.push({ id: doc.id, ...doc.data() });
    });
    return heavyDuty;
};

export const addHeavyDuty = async (heavyDutyData: any) => {
    try {
        const docRef = await addDoc(collection(firestore, "heavy-duty"), heavyDutyData);
        return { status: true, doc: docRef.id };
    } catch (e) {
        return { status: false };
    }
};

export const updateHeavyDuty = async (id: any, updatedHeavyDuty: any) => {
    const vehicleRef = doc(firestore, "heavy-duty", id);
    await updateDoc(vehicleRef, updatedHeavyDuty);
    console.log("Vehicle successfully updated");
};

export const deleteHeavyDuty = async (id: any) => {
    const vehicleRef = doc(firestore, "heavy-duty", id);
    await deleteDoc(vehicleRef);
    console.log("Vehicle deleted");
};

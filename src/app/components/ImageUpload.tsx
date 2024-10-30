import { useEffect, useState } from "react";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase";
import Image from "next/image";

const ImageUpload = ({ onImagesUploaded }: any) => {
    const [images, setImages] = useState<any>([]);

    const handleImageChange = (e: any) => {
        const files = Array.from(e.target.files);
        setImages((prevImages: any) => [...prevImages, ...files]);
    };

    const handleUpload = async () => {
        const imageUrls = [];

        try {
            for (const image of images) {
                const imageRef = ref(storage, `products/${image.name}`);
                await uploadBytes(imageRef, image);
                const url = await getDownloadURL(imageRef);
                imageUrls.push(url);
            }
            alert("Imagenes subidas con éxito");
        } catch {
            alert("Error subiendo imagenes");
        }
        onImagesUploaded(imageUrls);
    };

    return (
        <div>
            <input type="file" multiple onChange={handleImageChange} />
            <div className="mt-5">
                {images.map((img: any, index: any) => (
                    <Image
                        key={index}
                        src={URL.createObjectURL(img)}
                        alt="preview"
                        width="100"
                        height="100"
                    ></Image>
                ))}
            </div>
            <button className="bg-primary text-white p-4 mr-2 mt-2" onClick={handleUpload}>
                Subir imagenes
            </button>
        </div>
    );
};

export default ImageUpload;

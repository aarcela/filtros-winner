"use client";
import React from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      userCredential && router.push("/main/products");
    } catch (error: any) {
      if (error.message === "INVALID_LOGIN_CREDENTIALS") setError("Credenciales incorrectas");
      else if (error.message === "INVALID_EMAIL") setError("Email incorrecto");
      else setError("Vuelva a intentar");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-grow w-full bg-white p-8 content-center">
        <form className="max-w-md mx-auto space-y-4 p-8 bg-gray" onSubmit={handleSignIn}>
          <h1 className="text-xl font-semibold text-center text-black">Buscador Filtro Winner</h1>
          <div className="flex flex-col">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="username"
              placeholder="Usuario"
              name="username"
              className="px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
            />
          </div>
          <div className="flex flex-col">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Clave"
              name="password"
              className="px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Iniciar sesión
          </button>
          <h2 className="text-primary">{error}</h2>
        </form>
      </div>
      <div className="flex-shrink-0 hidden flex-grow p-8 content-center justify-items-center lg:block w-1/2 bg-cover bg-center bg-primary">
        <Image className="mx-auto" src="/assets/winner_logo.svg" width={540} height={104} alt="logo" />
      </div>
    </div>
  );
}

export default Login;

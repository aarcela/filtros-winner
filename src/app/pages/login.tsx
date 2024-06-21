"use client";
import React from "react";
import { auth } from "./../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const router = useRouter();

  const handleSignIn = async (event: any) => {
    console.log("Clicked");
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
      // router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;

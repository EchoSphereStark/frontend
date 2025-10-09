// LoginSheet.tsx (your design)
"use client";
import { useCatridgeAuth } from '@/hooks/useCatridgeAuth';
import { useState } from "react";

export default function LoginSheet() {
  const { isConnected, address, status, login} = useCatridgeAuth();
  const [username, setUsername] = useState("");

  if (isConnected) {
    return (
      <div className="space-y-3">
        <div className="text-sm break-all">Connected: {address}</div>
        {/* <button className="btn" onClick={logout}>Sign out</button> */}
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); login(/* { username } */); }} className="space-y-4">
      {/* Your styling/components */}
      <label className="block text-sm">Username (optional)</label>
      <input className="input" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <button className="btn w-full" disabled={status==="connecting"}>
        {status==="connecting" ? "Connecting…" : "Continue"}
      </button>
      <p className="text-xs text-muted-foreground">
        A secure window will open to finish sign-in.
      </p>
      {/* {error && <p className="text-xs text-red-600">{String(error)}</p>} */}
    </form>
  );
}

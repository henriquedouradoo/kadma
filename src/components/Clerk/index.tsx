import { SignedOut, SignInButton } from "@clerk/clerk-react";
import './styles.css'

export default function Clerk() {
  return (
    <div className="container-clerk">
      <SignedOut>
      <SignInButton forceRedirectUrl="/dashboard">
        <button className="btn-enter">   Login   </button>
      </SignInButton>
      </SignedOut>
    </div>
  );
}
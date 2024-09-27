import { SignedOut, SignInButton } from "@clerk/clerk-react";
import './styles.css'

export default function Clerk() {
  return (
    <div className="container-clerk">
      <SignedOut>
      <SignInButton mode="redirect" forceRedirectUrl="/dashboard">
        <button className="btn-enter">   Login in   </button>
      </SignInButton>
      </SignedOut>
    </div>
  );
}
import { SignedOut, SignInButton } from "@clerk/clerk-react";
import './styles.css'

export default function Clerk() {
  return (
    <div>
      <SignedOut>
      <SignInButton forceRedirectUrl="/dashboard">
        <button className="btn-enter">   Login   </button>
      </SignInButton>
      </SignedOut>
    </div>
  );
}
import { RedirectToSignIn, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
export default function Clerk() {
  return (
    <header>
      <SignedIn>
      <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </header>
  );
}
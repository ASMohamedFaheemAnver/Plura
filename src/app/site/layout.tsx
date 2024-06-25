import Navigation from "@/components/site/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { dark } from "@clerk/themes";
type Props = {
  children: React.ReactNode;
};

const SiteLayout: React.FC<Props> = ({ children }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
};

export default SiteLayout;

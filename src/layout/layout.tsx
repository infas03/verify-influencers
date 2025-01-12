import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center min-h-screen p-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {children}
    </div>
  );
};

export default Layout;
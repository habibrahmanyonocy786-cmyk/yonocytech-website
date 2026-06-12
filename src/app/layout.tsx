import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Root layout that handles locale redirection
export default function RootLayout({ children }: Props) {
  return children;
}
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div>
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </Providers>
  );
}

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "./providers";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#E0EAFC] to-[#CFDEF3]">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </div>
    </Providers>
  );
}

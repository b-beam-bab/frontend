import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <Navigation />
      </div>
    </header>
  );
}

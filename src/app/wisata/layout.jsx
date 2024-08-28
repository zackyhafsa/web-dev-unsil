import WhiteNavbar from "../components/WhiteNavbar";

export default function WisataLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <WhiteNavbar />

      {children}
    </section>
  );
}

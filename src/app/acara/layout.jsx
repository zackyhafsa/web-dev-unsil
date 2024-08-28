import WhiteNavbar from "../components/WhiteNavbar";

export default function AcaraLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <WhiteNavbar />

      {children}
    </section>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-[25vh] flex items-end pb-20 justify-center text-center text-sm text-zinc-500" >
      © {currentYear} Nurdaulet Orynbassarov
    </footer>
  );
};
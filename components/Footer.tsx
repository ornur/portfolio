import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full">
      <div className="my-35 text-center">
        <p className="text-zinc-500">Need a Web Developer?</p>
        <h1 className="mb-5 text-4xl font-bold">Let&apos;s Work Together</h1>
        <RainbowButton>
          <Link href="mailto:nurdauletaidaruli@gmail.com">Hire Me</Link>
        </RainbowButton>
      </div>
      <div className="mb-20 text-center text-sm text-zinc-500">
        <p>© {currentYear} Nurdaulet Orynbassarov</p>
      </div>
    </footer>
  );
};

export default Footer;

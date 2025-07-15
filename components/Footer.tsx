import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";

const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className="w-full">
      <div className="my-35 text-center">
        <p className="text-zinc-500">Need a Web Developer?</p>
        <h1 className="font-bold text-4xl mb-5">Let&apos;s Work Together</h1>
        <RainbowButton>
          <Link href="mailto:nurdauletaidaruli@gmail.com">Hire Me</Link>
        </RainbowButton>
      </div>
      <div className="text-center mb-20 text-zinc-500 text-sm">
        <p>© {currentYear} Nurdaulet Orynbassarov</p>
      </div>
    </footer>
  );
};

export default Footer;

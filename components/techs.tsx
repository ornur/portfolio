import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import Link from "next/link";
import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/data";

// Type definitions
interface Technology {
  id: string;
  title: string;
  description: string;
  author: string;
  website: string;
  icon: string
  position: {
    row: number;
    col: number;
  };
}

interface TechCardProps extends Technology {
  children?: React.ReactNode;
}

interface HoverCardWrapperProps {
  children: React.ReactNode;
  description: string;
  author: string;
  website: string;
}


// Main component
export default function Techs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {TECHNOLOGIES.map((tech) => (
        <TechCard
          key={tech.id}
          {...tech}
          icon={tech.icon}
        >
          <span className="font-medium text-lg tracking-tight">
            {tech.title}
          </span>
        </TechCard>
      ))}
    </div>
  );
}

function TechCard({
  title,
  description,
  author,
  website,
  icon,
  children,
}: TechCardProps) {
  return (
    <div className="card w-full h-44 dark:bg-card border-black rounded-md border hover:border-[var(--border-bright)] dark:border-border dark:hover:border-[var(--border-bright)] dark:hover:bg-[var(--accent-bright)] transition-all duration-300 ease-in-out">
      <HoverCardWrapper
        description={description}
        author={author}
        website={website}
      >
        <div className="w-full h-full flex gap-5 flex-col items-center justify-center group cursor-pointer">
          <div className="relative w-[100px] h-[100px] p-4 pb-0 group-hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image
              src={icon}
              alt={`${title} logo`}
              fill
              className="object-contain invert dark:invert-0"
              sizes="100px"
            />
          </div>
          {children}
        </div>
      </HoverCardWrapper >
    </div >
  );
}


function HoverCardWrapper({
  children,
  description,
  author,
  website,
}: HoverCardWrapperProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            {description}
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[var(--geist-cyan)] bg-[var(--geist-cyan-dark)] px-1 rounded hover:underline transition-colors"
            >
              {author}
            </Link>
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
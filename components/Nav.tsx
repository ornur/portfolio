"use client";

import Link from "next/link";

import { useTheme } from "@/hooks/use-theme";
import { links } from "@/lib/data";
import { Dock, DockIcon, DockItem, DockLabel } from "./ui/dock";

const Nav = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="fixed bottom-3 left-1/2 z-50 max-w-full -translate-x-1/2 transform">
      <Dock className="items-end pb-3">
        {links.map((item, index) =>
          item.title === "Theme" ? (
            <DockItem
              key={index}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
              onClick={toggleTheme}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ) : (
            <Link
              key={index}
              href={item.href}
              target={item.title !== "Home" ? "_blank" : "_self"}
            >
              <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ),
        )}
      </Dock>
    </div>
  );
};

export default Nav;

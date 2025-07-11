"use client";

import { Dock, DockIcon, DockItem, DockLabel } from "./ui/dock";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 max-w-full z-50">
        <Dock className="items-end pb-3">
          {links.filter(item => item.title !== "Theme").map((item, index) => (
            <Link key={index} href={item.href} target={item.title !== "Home" ? "_blank" : "_self"}>
              <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          ))}
          {/* Placeholder for theme button during SSR */}
          <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
            <DockLabel>Theme</DockLabel>
            <DockIcon>🌙</DockIcon>
          </DockItem>
        </Dock>
      </div>
    );
  }

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 max-w-full z-50">
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
            <Link key={index} href={item.href} target={item.title !== "Home" ? "_blank" : "_self"}>
              <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                <DockLabel>{item.title}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            </Link>
          )
        )}
      </Dock>
    </div>
  );
};

export default Nav;

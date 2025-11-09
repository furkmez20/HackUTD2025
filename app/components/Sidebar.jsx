"use client";
import { useState } from "react";
import { Home, Briefcase, MessageSquare, FileText, Folder } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", icon: <Home size={20} />, href: "/" },
  { name: "Portfolio", icon: <Briefcase size={20} />, href: "/portfolio" },
  { name: "Chat", icon: <MessageSquare size={20} />, href: "/chat" },
  { name: "Reports", icon: <FileText size={20} />, href: "/reports" },
  { name: "Documents", icon: <Folder size={20} />, href: "/documents" },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={`h-full bg-dark text-lightAccent flex flex-col transition-all duration-300 ${
        expanded ? "sidebar-expanded" : "sidebar-collapsed"
      }`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="p-4 text-left hover:bg-subHeading transition-colors"
      >
        {expanded ? "CBRE AI" : "☰"}
      </button>

      <nav className="flex flex-col mt-4 gap-1">
        {menuItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 text-sm rounded-lg hover:bg-subHeading transition-all ${
                active ? "bg-accent text-light font-semibold" : ""
              }`}
            >
              <span>{item.icon}</span>
              {expanded && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto p-4 text-xs text-subHeading">
        {expanded && "© 2025 CBRE HackUTD"}
      </div>
    </div>
  );
}

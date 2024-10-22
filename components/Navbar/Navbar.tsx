"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";

const navItems = [
  { name: "Nosotros", href: "#nosotros" },
  {
    name: "Servicios",
    href: "#",
    subItems: [
      { name: "Electronics", href: "/products/electronics" },
      { name: "Clothing", href: "/products/clothing" },
      {
        name: "Home",
        href: "#",
        subItems: [
          { name: "Furniture", href: "/products/home-garden/furniture" },
          { name: "Decor", href: "/products/home-garden/decor" },
        ],
      },
      {
        name: "Home & Garden",
        href: "/products/home-garden",
        subItems: [
          { name: "Furniture", href: "/products/home-garden/furniture" },
          { name: "Decor", href: "/products/home-garden/decor" },
        ],
      },
    ],
  },
  { name: "Outsourcing Contable", href: "#outsourcing-contable" },
  { name: "Desarrollo Web", href: "#desarrollo-web" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [isSearchOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const NavItem = ({
    item,
    mobile = false,
    depth = 0,
  }: {
    item: any;
    mobile?: boolean;
    depth?: number;
  }) => {
    const isOpen = openDropdowns.includes(item.name);
    const isActive = activeItem === item.href;

    return (
      <div className={`relative ${mobile ? "w-full" : ""}`}>
        {item.subItems ? (
          <>
            <button
              onClick={() => toggleDropdown(item.name)}
              className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium ${
                mobile
                  ? "text-gray-700 hover:bg-gray-100"
                  : `text-gray-700 hover:bg-gray-100 ${
                      isActive ? "bg-gray-100" : ""
                    }`
              } ${depth > 0 ? "pl-8" : ""}`}
              aria-expanded={isOpen}
            >
              {item.name}
              <ChevronDown
                className={`ml-1 h-4 w-4 transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div
                className={`${
                  mobile
                    ? "pl-4"
                    : `absolute ${
                        depth > 0 ? "left-full top-0" : "left-0 mt-2"
                      } w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`
                }`}
              >
                {item.subItems.map((subItem: any, index: number) => (
                  <div key={index} className={depth > 0 ? "relative" : ""}>
                    <NavItem
                      key={subItem.name}
                      item={subItem}
                      mobile={mobile}
                      depth={depth + 1}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <a
            href={item.href}
            className={`block px-4 py-2 text-sm ${
              mobile
                ? "text-gray-700 hover:bg-gray-100"
                : `text-gray-700 hover:bg-gray-100 ${
                    isActive ? "bg-gray-100" : ""
                  }`
            } ${depth > 0 ? "pl-8" : ""}`}
            onClick={() => setActiveItem(item.href)}
          >
            {item.name}
          </a>
        )}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <NavItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} mobile />
            ))}
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <input
                type="text"
                className="w-full p-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search..."
              />
              <Search
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

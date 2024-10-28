"use client";

import Link from "next/link";
import Example from "./FlyoutLink";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-16">
        <div className="flex items-center">
          <div className="">
            <div className="flex items-baseline ">
              <ul className="flex items-center justify-center space-x-10 px-4 py-2 text-md font-medium">
                <li className="font-semibold text-paragraph  hover:text-masyp">
                  <Link href="nosotros">Nosotros</Link>
                </li>
                <Example />
                <li className="font-semibold text-paragraph  hover:text-masyp">
                  <Link href="#outsourcing-contable">Outsourcing Contable</Link>
                </li>

                <li className="font-semibold text-paragraph  hover:text-masyp">
                  <Link href="#desarrollo-web">Desarrollo Web</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

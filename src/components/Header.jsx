import { useEffect, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import gsap, { Power2 } from "gsap";

const navigation = [
  { name: "About", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  {
    name: "Contact",
    href: "/contacts",
    action: () => (window.location.href = "mailto:hsanromadon@gmail.com"),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const logoRef = useRef(null);
  const linkRef = useRef(null);

  const animateHeaderLeft = () => {
    gsap.fromTo(
      logoRef.current,
      {
        transform: "translateX(-200px)",
      },
      {
        transform: "translateX(0)",
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  };

  const animateHeaderRight = () => {
    gsap.fromTo(
      linkRef.current,
      {
        transform: "translateX(200px)",
      },
      {
        transform: "translateX(0)",
        duration: 1,
        ease: Power2.easeInOut,
      }
    );
  };

  useEffect(() => {
    animateHeaderLeft();
    animateHeaderRight();
  }, []);

  const navigate = useNavigate();

  return (
    <Disclosure className="overflow-hidden" as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 py-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div ref={logoRef} className="flex flex-shrink-0 items-center">
                  <img
                    onClick={() => navigate("/")}
                    className="h-8 w-auto cursor-pointer "
                    src={logo}
                    alt="Hasan Romadon logo"
                  />
                </div>
              </div>
              <div ref={linkRef} className="hidden sm:block absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={
                      item.action ? "mailto:hsanromadon@gmail.com" : item.href
                    }
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "text-blue-500"
                          : "text-gray-300 hover:text-blue-500",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="span">
                  <NavLink
                    to={
                      item.action ? "mailto:hsanromadon@gmail.com" : item.href
                    }
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "text-blue-500"
                          : "text-gray-300 hover:text-blue-500",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;

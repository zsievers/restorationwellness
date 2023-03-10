import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1">
        <a
          href="#home"
          className="flex items-center text-gray-600 font-semibold"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-gray-600 font-semibold"
      >
        <a href="#services" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-gray-600 font-semibold"
      >
        <a href="#about-me" className="flex items-center">
          About Me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-gray-600 font-semibold"
      >
        <a href="#contact-me" className="flex items-center">
          Contact Me
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-50 mx-auto max-w-screen-xl py-2 px-4 mt-2 lg:px-8 lg:py-4">
      <div className="container text-gray-600 mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5"
        >
          <span className="text-5xl md:text-2xl text-[#ad91a4] font-logo2">
            RW
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto ">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}

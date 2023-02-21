export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-gradient-to-t from-white to-[#d3b1c8]"
      id="contact-me"
    >
      <div className="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-4xl">
            HOPE | CONFIDENCE | FREEDOM
          </h2>

          {/* <p className="max-w-sm mx-auto mt-4 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
            maiores ipsum eos temporibus ea nihil.
          </p> */}

          <a
            href="mailto:restorationwellness1636@gmail.com"
            className="inline-block px-12 py-3 mt-8 text-sm font-semibold bg-[#fff] border border-[#ad91a4] rounded-full hover:bg-[#ad91a4] hover:text-white"
          >
            Reach Out Today!
          </a>
        </div>

        <div className="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <nav aria-label="Footer Navigation - Support">
            <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
              <li>
                <p className="text-gray-500 transition">Copyright © 2023</p>
              </li>

              <li>
                <p className="text-gray-500 transition">All Rights Reserved</p>
              </li>

              <li>
                <a
                  href="https://zsievers.github.io/Portfolio/"
                  className="text-gray-500 transition hover:opacity-75 hover:text-[#ad91a4]"
                >
                  Sievers Designs
                </a>
              </li>
            </ul>
          </nav>

          <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
            {/* <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-[#ad91a4]"
              >
                <span className="sr-only">Facebook</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 hover:text-[#ad91a4]"
              >
                <span className="sr-only">Twitter</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

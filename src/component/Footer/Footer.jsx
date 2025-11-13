import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5 h-45 footer-center rounded-2xl bg-black sm:bg-black md:bg-black lg:bg-black text-primary-content p-10">
        <aside>
          <p className="font-bold text-4xl">
           <span className="font-extrabold
          ">Work<span className="font-extrabold text-fuchsia-400">Nex</span></span>
          </p>
          <p> Providing reliable tech since 1992</p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid  grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-current"
              >
                <path d="M18.244 2H21L14.555 9.36L22 22h-6.244L11.76 14.64L6.5 22H3.75L10.445 13.2L3 2h6.245L12.08 8.64L18.244 2zM17.146 20h1.709L7.025 4h-1.74L17.146 20z" />
              </svg>
              
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

export default function Footer() {
  return (
    <footer className="text-center dark:text-grayPorfolio text-black lg:text-left mx-6">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with me on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a className="dark:text-grayPorfolio text-black ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="py-5 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              NexReel
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Pages
            </h6>
            <p className="mb-4">
              <a className="dark:text-grayPorfolio text-black ">Home</a>
            </p>
            <p className="mb-4">
              <a className="dark:text-grayPorfolio text-black ">Movies</a>
            </p>
            <p className="mb-4">
              <a className="dark:text-grayPorfolio text-black ">TV Shows</a>
            </p>
            <p>
              <a className="dark:text-grayPorfolio text-black ">Profile</a>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a className="dark:text-grayPorfolio text-black ">Forum</a>
            </p>
            <p className="mb-4">
              <a className="dark:text-grayPorfolio text-black ">Settings</a>
            </p>
            <p className="mb-4">
              <a className="dark:text-grayPorfolio text-black ">FAQs</a>
            </p>
            <p>
              <a className="dark:text-grayPorfolio text-black ">Help</a>
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="p-2 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <a
          className="font-semibold dark:text-grayPorfolio text-black dark:text-neutral-400 ml-2"
          href="https://www.linkedin.com/in/naiim-taefy-jimenez/"
        >
          Naiim Taefy
        </a>
      </div>
    </footer>
  );
}

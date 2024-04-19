import { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { FlagES, FlagFR, FlagUSA } from "../components/icons/flagsLang";

const LANGS = [
  {
    value: "enUS",
    label: "English",
    icon: FlagUSA,
  },
  {
    value: "esES",
    label: "Spanish",
    icon: FlagES,
  },
  {
    value: "frFR",
    label: "French",
    icon: FlagFR,
  },
];

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  // Add an event handler to close the menu when clicked out of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    // Add the event handler to the document
    document.addEventListener("click", handleClickOutside);
    // Clearing the event handler when unmounting the component
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuButtonRef]);

  const anchorRef = useRef(null);
  const [t, i18n] = useTranslation("translation");
  const [valueLang, setValueLang] = useState(i18n.language);
  const handleOpen = () => {
    setOpen(true);
  };

  // - BUTTONS CHANGE LANGUAGE
  const errRef = useRef();
  const [success, setSuccess] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  useEffect(() => {
    if (success) {
      localStorage.setItem("language", JSON.stringify(valueLang));
      i18n.changeLanguage(valueLang);
      setSuccess(false);
    }
  }, [i18n, success, valueLang]);
  const CurrentLang =
    i18n.language && LANGS.find((i) => i.value === i18n.language);
  const handleChangeLanguage = async (e) => {
    let language;
    switch (e) {
      case "esES":
        language = "es";
        break;
      case "enUS":
        language = "en";
        break;
      case "frFR":
        language = "fr";
        break;
      default:
        language = null;
        break;
    }
    setOpen(false);
    if (language) {
      try {
        setSuccess(true);
        setValueLang(e);
        setModalInfo(!modalInfo);
      } catch (err) {
        if (!err?.response) {
          console.error(t("No Server Response"));
        } else if (err.response?.status === 400) {
          console.error(t("Missing Data"));
        } else if (err.response?.status === 401) {
          console.error(t("Unauthorized"));
        } else {
          console.error(t("Not Found"));
        }
        errRef.current.focus();
      }
    }
  };
  return (
    <div>
      <button ref={anchorRef} onClick={handleOpen} className="hover:scale-125 transition duration-300">
        <img
          src={CurrentLang && CurrentLang.icon}
          alt={`${t("Current language")} ${CurrentLang.label}`}
        />
      </button>
      <div className="ml-2 flex items-center md:ml-2">
        {/* Language dropdown */}
        <Menu as="div" className="relative">
          <>
            <div>
              <Menu.Button
                className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none hover:scale-105"
                onClick={() => setOpen(!open)}
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open language menu</span>
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                ref={menuButtonRef}
                className="absolute right-0 z-10 mt-1 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {LANGS.map((item) => (
                  <Menu.Item key={item.label}>
                    {() => (
                      <button
                        onClick={() => handleChangeLanguage(item.value)}
                        className="hover:bg-gray-100 hover:rounded-md px-4 py-2 text-base text-gray-700 cursor-pointer w-full text-right flex items-center gap-2"
                      >
                        <img
                          src={item.icon}
                          alt={`${item.label} ${t("Flag")}`}
                        />
                        {t(item.label)}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        </Menu>
      </div>
    </div>
  );
};

export default NavMenu;

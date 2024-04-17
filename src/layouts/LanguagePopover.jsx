import { useRef, useState, useEffect } from "react";
// components
import { useTranslation } from "react-i18next";
// ----------------------------------------------------------------------
const LANGS = [
  {
    value: "enUS",
    label: "English",
    icon: "../components/icons/flagsLang/ic_flag_en.svg",
  },
  {
    value: "esES",
    label: "Español",
    icon: "../components/icons/flagsLang/ic_flag_es.svg",
  },
  {
    value: "frFR",
    label: "Frances",
    icon: "../components/icons/flagsLang/ic_flag_fr.svg",
  },
];
// ----------------------------------------------------------------------
export default function LanguagePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation("translation");
  const [valueLang, setValueLang] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  // - Process Information
  const processInfo = {
    Lang: "",
  };
  switch (i18n.language) {
    case "esES":
      processInfo.LangIcon = LANGS[1].icon;
      break;
    case "enUS":
      processInfo.LangIcon = LANGS[0].icon;
      break;
    case "frFR":
      processInfo.LangIcon = LANGS[2].icon;
      break;
    default:
      processInfo.LangIcon = LANGS[1].icon;
      break;
  }

  useEffect(() => {
    i18n.changeLanguage(valueLang);
  }, [i18n, valueLang]);

  // - BUTTONS CHANGE LANGUAGE
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(valueLang));
    i18n.changeLanguage(valueLang);
    const getLS = () => {
      window.location.reload(true);
    };
    if (success) {
      getLS();
    }
  }, [i18n, success, valueLang]);

  const handleChangeLanguage = async (e) => {
    let language;
    let valueLang;
    switch (e) {
      case "esES":
        language = "es";
        valueLang = "esES";
        break;
      case "enUS":
        language = "en";
        valueLang = "enUS";
        break;
      case "frFR":
        language = "fr";
        valueLang = "frFR";
        break;
      default:
        language = null;
        break;
    }
    setOpen(false);
    if (language) {
      try {
        setSuccess(true);
        setModalInfo(!modalInfo);
        setValueLang(valueLang);
      } catch (err) {
        if (!err?.response) {
          setErrMsg(t("No Server Response"));
        } else if (err.response?.status === 400) {
          setErrMsg(t("Missing Data"));
        } else if (err.response?.status === 401) {
          setErrMsg(t("Unauthorized"));
        } else {
          setErrMsg(t("Not Found"));
        }
        errRef.current.focus();
      }
    }
  };
  return (
    <>
      <button ref={anchorRef} onClick={handleOpen}>
        {success === false && errMsg === ""
          ? null
          : console.log(success === true ? t("Success!") : errMsg)}
        <img src={processInfo.LangIcon} alt={processInfo.LangIcon} />
      </button>
      {/* // - BUTTTONS CHANGE LANGUAGE */}
      <MenuPopover
        open={open}
        onClose={handleChangeLanguage}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => (
            <MenuItem
              key={option.value}
              selected={option.value === valueLang}
              onClick={() => handleChangeLanguage(option.value)}
            >
              <Box
                component="img"
                alt={option.label}
                src={option.icon}
                sx={{ width: 28, mr: 2 }}
                name="language"
                label={t("Language")}
                id="language"
              />
              {option.label}
            </MenuItem>
          ))}
        </Stack>
      </MenuPopover>
    </>
  );
}

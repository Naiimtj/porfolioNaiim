import {
  MacOS,
  SqlServer,
  VisualStudio,
  VisualStudioCode,
  VmWare,
  Windows,
  WindowsServer,
  Wordpress,
} from "./icons/programs";

const programComponents = (program) => {
  const programIcons = {
    Windows: Windows,
    "Windows Server": WindowsServer,
    "Visual Studio Code": VisualStudioCode,
    "Visual Studio": VisualStudio,
    "SQL Server": SqlServer,
    "Mac OS": MacOS,
    VmWare: VmWare,
    Wordpress: Wordpress,
  };

  return programIcons[program] || "";
};

export default programComponents;

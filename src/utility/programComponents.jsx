import {
  SqlServer,
  VisualStudio,
  VisualStudioCode,
  VmWare,
  WindowsServer,
  Wordpress,
} from "../assets/icons/programs";

const programComponents = (program) => {
  const programIcons = {
    "Windows Server": WindowsServer,
    "Visual Studio Code": VisualStudioCode,
    "Visual Studio": VisualStudio,
    "SQL Server": SqlServer,
    VmWare: VmWare,
    Wordpress: Wordpress,
  };

  return programIcons[program] || "";
};

export default programComponents;

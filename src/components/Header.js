import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [theme, setTheme] = useState("medium"); // Estado para controlar o tema atual

  useEffect(() => {
    document.documentElement.className = ""; // Remove todas as classes do elemento raiz
    document.documentElement.classList.add(theme); // Adiciona a classe do tema atual ao elemento raiz
  }, [theme]); // Executa sempre que o estado 'theme' for alterado

  return (
    <div>
      <header>
        {/* Seção do logo e título */}
        <div className="logo">
          <img src={Logo} alt="taskMate" /> {/* Imagem do logo */}
          <span>TaskMate</span> {/* Título do aplicativo */}
        </div>

        {/* Seletor de temas */}
        <span className="themeSelector">
          {/* Cada span representa um tema */}
          <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
          <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
          <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
          <span className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
          <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} onClick={() => setTheme("gradientTwo")}></span>
          <span className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>
          
          </span>
      </header>
    </div>
  );
};

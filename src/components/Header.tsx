import "./Header.css";
import OverlayMenu from "./OverlayMenu";

interface Props {
  subjects: string[];
  language: string;
}

function Header({ subjects, language }: Props) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header>
      <a href={language === "br" ? "#/en" : "#/"} className="menu-icon">
        <img
          src={`${language}.jpg`}
          alt={language.toUpperCase()}
          className="menu-icon icon-bar"
        />
      </a>

      {subjects.map((item, index) => (
        <button
          key={index}
          className="nav-link"
          onClick={() => scrollToSection(item.replace(/\s+/g, ""))}
          type="button"
        >
          {item}
        </button>
      ))}

      <a className="menu-icon icon-bar">
        <OverlayMenu
          subjects={
            language == "br"
              ? [
                  "Sobre mim",
                  "Habilidades",
                  "Projetos",
                  ".Etanômico",
                  ".GeoHunting",
                  ".SOLUCIONA",
                  ".Rendify",
                  "Contato",
                ]
              : [
                  "About Me",
                  "Skills",
                  "Projects",
                  ".Etanômico",
                  ".GeoHunting",
                  ".SOLUCIONA",
                  ".Rendify",
                  "Contact",
                ]
          }
        />
      </a>
    </header>
  );
}

export default Header;

import { useState } from "react";
import "./OverlayMenu.css";
import Hamburger from "hamburger-react";

interface Props {
  subjects: string[];
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function OverlayMenu({ subjects }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Hamburger size={40} toggled={open} toggle={setOpen} />
      {open && (
        <menu className="fixed absolute py-4 text-white bg-black overlay-menu">
          <ul className="list-unstyled m-0">
            {subjects.map((item, index) => (
              <li key={index}>
                <button
                  className={
                    item[0] !== "."
                      ? "btn btn-link overlay-item"
                      : "btn btn-link overlay-item subtopic"
                  }
                  onClick={() => scrollToSection(item.replace(/\s+/g, ""))}
                  type="button"
                >
                  {item[0] !== "." ? item : item.split(".")[1]}
                </button>
              </li>
            ))}
          </ul>
        </menu>
      )}
    </>
  );
}

export default OverlayMenu;

import { useEffect, useState } from "react";
import "./GoTopButton.css";

function GoTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed-bottom d-flex justify-content-end">
      <button
        className="btn btn-secondary btn-lg border-white rounded-circle"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        ↑
      </button>
    </div>
  );
}

export default GoTopButton;

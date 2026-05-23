import "./Footer.css";

interface Props {
  language: string;
}

function Footer({ language }: Props) {
  return (
    <footer className="bg-dark py-1 mt-5">
      <div className="container d-flex align-items-center justify-content-between text-white-50 small">
        <span className="text-light fw-bold fs-1">João Peruzzo</span>
        <span className="fw-normal text-white-50">
          {language == "br" ? "Desenvolvedor Fullstack" : "Fullstack Developer"}
        </span>

        <span className="d-flex align-items-center gap-3">
          <span>
            <i className="bi bi-envelope me-1"></i>
            <a
              href={
                language == "br"
                  ? "mailto:contato@joaoperuzzo.me"
                  : "mailto:contact@joaoperuzzo.me"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {language == "br"
                ? "contato@joaoperuzzo.me"
                : "contact@joaoperuzzo.me"}
            </a>
          </span>

          <span>
            <i className="bi bi-github me-1"></i>
            <a
              href="https://github.com/SoJoaomesmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              SoJoaomesmo
            </a>
          </span>

          <span>
            <i className="bi bi-linkedin me-1"></i>
            <a
              href="https://www.linkedin.com/in/joaoperuzzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              joaoperuzzo
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

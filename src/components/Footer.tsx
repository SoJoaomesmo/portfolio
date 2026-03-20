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
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdVzHStBKgxqkhjtRgBxSqcKVDrJQCzLkZFDWWkDjKjZTNLmlZcsLgVfbKRJKnGkjzBCQ">
              peruzzo2018@gmail.com
            </a>
          </span>

          <span>
            <i className="bi bi-github me-1"></i>
            <a href="https://github.com/SoJoaomesmo">SoJoaomesmo</a>
          </span>

          <span>
            <i className="bi bi-linkedin me-1"></i>
            <a href="https://www.linkedin.com/in/joaoperuzzo">joaoperuzzo</a>
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

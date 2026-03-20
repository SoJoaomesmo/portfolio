import Section from "../components/Section";
import Header from "../components/Header";
import GoTopButton from "../components/GoTopButton";
import Footer from "../components/Footer";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function English() {
  return (
    <>
      <Header
        subjects={["About Me", "Skills", "Projects", "Contact"]}
        language="en"
      />

      <GoTopButton />

      <Section
        title="About Me"
        img={["/picture.jpg", "Profile picture"]}
        image_first
      >
        <section className="right-text">
          <p className="fs-3">
            My name is João Peruzzo. I hold a technical degree in Internet
            Informatics from IFC Campus Concórdia, and I am currently pursuing a
            degree in Systems Analysis and Development at IFSC Campus Xanxerê.
            Throughout my academic journey, I have developed several group
            projects with the goal of honing my software development skills for
            both computers and mobile devices.
          </p>
          <p className="fs-3">
            If you would like to get in touch or learn more details, feel free
            to visit my{" "}
            <a
              className="fs-3"
              href="https://www.linkedin.com/in/joaoperuzzo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            or access the{" "}
            <a
              onClick={() => scrollToSection("Contact".replace(/\s+/g, ""))}
              className="fs-3"
            >
              Contact
            </a>{" "}
            section available at the bottom of this page.
          </p>
        </section>
      </Section>

      <Section title="Skills" img={["/abilities.jpg", ""]}>
        <p className="left-text">
          <ul>
            <li className="fs-3">
              <b>English:</b> I am currently classified as CEFR Level B2,
              allowing me to comfortably use English for both study and work
              purposes.
            </li>
            <li className="fs-3">
              <b>Backend:</b> I am familiar with JavaScript, Dart, Lua and
              Flask, and I am currently learning PostgreSQL.
            </li>
            <li className="fs-3">
              <b>Frontend:</b> I have experience with Flutter, Vue, and basic
              HTML, and I am improving my skills in React.js, Angular, and
              Bootstrap.
            </li>
          </ul>
        </p>
      </Section>

      <h1 id="Projects">Projects</h1>

      <Section
        title=".Etanômico"
        img={["/etanomico.jpg", "Etanômico logo"]}
        image_first
      >
        <section className="right-text">
          <p className="fs-3">
            Etanômico is an application designed to help users save money when
            refueling their vehicles. It offers practical and up-to-date
            features such as the Alcohol vs. Gasoline Comparator, which
            calculates the best fuel option based on prices and the 70% rule.
            The Consumption Calculator estimates fuel costs, average
            consumption, and vehicle efficiency, while the Price Monitoring
            feature displays the average gasoline price in each state.
          </p>
          <a
            className="right fs-3"
            href="https://github.com/schumann7/etanomico/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Click here to learn more about Etanômico
          </a>
        </section>
      </Section>

      <Section title=".GeoHunting" img={["/geohunting.jpg", "GeoHunting logo"]}>
        <section className="left-text">
          <p className="fs-3">
            GeoHunting is an innovative mobile application developed in Flutter
            that combines GPS geolocation technology with classic treasure hunt
            gameplay. The main goal is to allow users to search for treasures
            created by friends or other players, either individually or in
            groups. It is ideal for social and recreational activities,
            transforming the real world into an interactive gaming environment.
          </p>
          <a
            className="fs-3"
            href="https://github.com/schumann7/geo-hunting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Click here to learn more about GeoHunting
          </a>
          <br />
          <a
            className="right fs-3"
            href="https://www.youtube.com/watch?v=8_Zosio2K7Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ GeoHunting live demonstration
          </a>
        </section>
      </Section>

      <Section
        title=".SOLUCIONA"
        img={["/soluciona.jpg", "Soluciona logo"]}
        image_first
      >
        <section className="right-text">
          <p className="fs-3">
            SOLUCIONA is a mobile application that empowers citizens to report
            infrastructure issues in their communities. Using GPS and Flutter,
            users can register local problems, which are displayed on the app’s
            main map. Other users can view these reports, and local authorities
            have access to a list of issues. Once a problem is resolved, its
            card is removed from the system.
          </p>
          <a
            className="fs-3"
            href="https://github.com/Romulooo/Soluciona"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Click here to learn more about SOLUCIONA
          </a>
        </section>
      </Section>

      <Section title=".Rendify" img={["/rendify.png", "Rendify logo"]}>
        <section className="left-text">
          <p className="fs-3">
            Rendify is an application that simulates stock trading and portfolio
            management, featuring charts and customization options. The project
            includes translation support and a responsive interface using Google
            Fonts and Material Design. Rendify was created to help people better
            understand the stock market by providing a safe and intuitive
            environment for learning how to invest.
          </p>
          <a
            className="fs-3"
            href="https://github.com/MauricioReisdoefer/rendify-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Click here to learn more about Rendify
          </a>
        </section>
      </Section>

      <Section title="Contact" img={["/contato.jpg", "Contact image"]}>
        <section className="left-text">
          <p className="fs-3">
            Use the links below to access the pages according to your preferred
            contact method. If you are unable to access the links directly,
            please refer to the footer below and contact me manually.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="https://github.com/SoJoaomesmo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/GitHub-333?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/joaoperuzzo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"
                alt="LinkedIn"
              />
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdVzHStBKgxqkhjtRgBxSqcKVDrJQCzLkZFDWWkDjKjZTNLmlZcsLgVfbKRJKnGkjzBCQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"
                alt="Gmail"
              />
            </a>
          </div>
        </section>
      </Section>
      <Footer language="en" />
    </>
  );
}

export default English;

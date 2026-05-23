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

function Portuguese() {
  return (
    <>
      <Header
        subjects={["Sobre mim", "Habilidades", "Projetos", "Contato"]}
        language="br"
      />
      <GoTopButton />
      <Section title="Sobre mim" img={["/picture.jpg", "Imagem"]} image_first>
        <section className="right-text">
          <p className="fs-3">
            Meu nome é João Peruzzo, formado em Técnico de Informática para
            Internet no IFC Campus Concórdia e atualmente cursando Análise e
            Desenvolvimento de Sistemas no IFSC Campus Xanxerê. Durante minha
            vida acadêmica, desenvolvi diversos projetos em grupo com o objetivo
            de aprimorar minhas Habilidades de Desenvolvimento de softwares para
            computadores e dispositivos móveis.
          </p>
          <p className="fs-3">
            Caso queira entrar em contato ou saber mais detalhes, acesse meu{" "}
            <a
              className="fs-3"
              href="https://www.linkedin.com/in/joaoperuzzo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>{" "}
            ou a aba de{" "}
            <a
              onClick={() => scrollToSection("Contato".replace(/\s+/g, ""))}
              className="fs-3"
            >
              Contatos
            </a>{" "}
            disponível no final da página.
          </p>
        </section>
      </Section>

      <Section title="Habilidades" img={["/abilities.jpg", ""]}>
        <p className="left-text">
          <ul>
            <li className="fs-3">
              <b>Inglês:</b> Atualmente, sou classificado na escala CEFR como
              Nível C1 em inglês, podendo utilizar o idioma para estudo e
              trabalho com facilidade.
            </li>
            <li className="fs-3">
              <b>Backend:</b> Neste momento, estou familiarizado com JavaScript,
              Dart, Lua, Flask e Node.js. E estou em processo de aprendizado em
              PostgreSQL e Java.
            </li>
            <li className="fs-3">
              <b>Frontend:</b> Possuo afinidade com Flutter, Vue, React,
              Bootstrap e HTML básico, e estou aprimorando minhas habilidades em
              Angular e TailWindCSS.
            </li>
          </ul>
        </p>
      </Section>

      <h1 id="Projetos">Projetos</h1>

      <Section
        title=".Etanômico"
        img={["/etanomico.jpg", "Logo do Etanômico"]}
        image_first
      >
        <section className="right-text">
          <p className="fs-3">
            O Etanômico é um aplicativo que ajuda a economizar na hora de
            abastecer, oferecendo funcionalidades práticas e atualizadas. Com o
            Comparador Álcool x Gasolina, você descobre qual combustível vale
            mais a pena para o seu bolso, com base no preço de ambos e no índice
            de 70%. A Calculadora de Consumo permite calcular o valor gasto, o
            consumo médio e a eficiência do seu carro, enquanto o Monitoramento
            de Preços mostra o preço médio da gasolina no seu estado, evitando
            que você pague mais caro.
          </p>
          <a
            className="right fs-3"
            href="https://github.com/schumann7/etanomico/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Clique aqui para descobrir mais sobre o Etanômico
          </a>
        </section>
      </Section>

      <Section
        title=".GeoHunting"
        img={["/geohunting.jpg", "Logo do GeoHunting"]}
      >
        <section className="left-text">
          <p className="fs-3">
            O Geo Hunting é um aplicativo móvel inovador desenvolvido em
            Flutter, que combina tecnologia de geolocalização (GPS) com a
            diversão clássica de jogos de caça ao tesouro. O objetivo principal
            é permitir que usuários busquem "tesouros" cadastrados previamente
            por amigos ou outros jogadores, podendo ser jogado individualmente
            ou em grupos. Ideal para atividades sociais e recreativas, o app
            transforma o mundo real em um campo de jogo interativo.
          </p>
          <a
            className="fs-3"
            href="https://github.com/schumann7/geo-hunting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Clique aqui para descobrir mais sobre o GeoHunting
          </a>
          <br />
          <a
            className="right fs-3"
            href="https://www.youtube.com/watch?v=8_Zosio2K7Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Demonstração prática do GeoHunting
          </a>
        </section>
      </Section>

      <Section
        title=".SOLUCIONA"
        img={["/soluciona.jpg", "Logo do Soluciona"]}
        image_first
      >
        <section className="right-text">
          <p className="fs-3">
            O SOLUCIONA é um app mobile que traz ao cidadão comum o poder de ter
            voz em sua comunidade. O aplicativo utiliza tecnologias como GPS e
            flutter para registrar problemas de infraestrutura, denunciados por
            usuários em sua região. Os problemas ficarão expostos no mapa
            inicial do app e disponíveis para outros usuários vê-los. A
            administração local terá acesso a uma lista dos problemas listados e
            quando estes forem solucionados o card será removido.
          </p>
          <a
            className="fs-3"
            href="https://github.com/Romulooo/Soluciona"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Clique aqui para descobrir mais sobre o SOLUCIONA
          </a>
        </section>
      </Section>

      <Section
        title=".TMDB Server"
        img={["/tmdbserver.png", "Logo do TMDB Server"]}
      >
        <section className="left-text">
          <p className="fs-3">
            Aplicação desenvolvida em Node.js com renderização server-side,
            consumindo a API do TMDB para exibir informações de filmes e séries
            de forma dinâmica. O projeto utiliza TailwindCSS para criar uma
            interface moderna e responsiva, permitindo buscar conteúdos por nome
            e visualizar detalhes completos de cada item. A aplicação também
            conta com tratamento de imagens ausentes através de fallback de
            pôster, garantindo uma melhor experiência visual. Toda a
            renderização é feita no servidor utilizando HTML puro, sem o uso de
            frameworks, apenas recursos nativos do Node.js.
          </p>
          <a
            className="fs-3"
            href="https://github.com/SoJoaomesmo/TMDB-Server"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Clique aqui para descobrir mais sobre o TMDB Server
          </a>
        </section>
      </Section>

      <Section
        title=".Rendify"
        img={["/rendify.png", "Logo do Rendify"]}
        image_first
      >
        <section className="right-text">
          <p className="fs-3">
            Rendify é um aplicativo que simula a compra e gestão de ações, com
            recursos de gráficos e configurações. O projeto conta com suporte a
            traduções e interface responsiva com uso de Google Fonts e Material
            Design. A ideia do Rendify surgiu por conta da dificuldade das
            pessoas em entender o mercado de ações, fazendo com que muitas delas
            desistam com o medo de acabar no prejuízo. Por isso, o objetivo
            principal do Rendify é oferecer um ambiente seguro e intuitivo para
            que usuários aprendam a investir de forma prática.
          </p>
          <a
            className="fs-3"
            href="https://github.com/MauricioReisdoefer/rendify-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↙ Clique aqui para descobrir mais sobre o Rendify
          </a>
        </section>
      </Section>

      <Section title="Contato" img={["/contato.jpg", "Imagem"]}>
        <section className="left-text">
          <p className="fs-3">
            Utilize os links abaixo para abrir as páginas conforme o meio de
            contato desejado. Caso não consiga acessar os links diretamente,
            visualize o rodapé abaixo e contate-me manualmente.
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
              href="mailto:contato@joaoperuzzo.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.shields.io/badge/E--mail-EA4335?style=for-the-badge&logo=gmail&logoColor=white"
                alt="E-mail"
              />
            </a>
          </div>
        </section>
      </Section>
      <Footer language="br" />
    </>
  );
}

export default Portuguese;

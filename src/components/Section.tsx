import type { ReactNode } from "react";
import "./Section.css";

interface Props {
  children: ReactNode;
  img: string[];
  image_first: boolean;
  title: string;
}

function Section({ children, img, image_first, title }: Props) {
  if (image_first)
    return (
      <div id={title}>
        <article className="mobile-info">
          <h1>{title[0] == "." ? title.split(".")[1] : title}</h1>{" "}
          {<img src={img[0]} alt={img[1]} className="img-fluid mobile-img" />}
        </article>
        <article className="d-flex align-items-center">
          <img src={img[0]} alt={img[1]} className="img-fluid img" />
          {children}
        </article>
      </div>
    );
  return (
    <div id={title}>
      <article className="mobile-info">
        <h1>{title[0] == "." ? title.split(".")[1] : title}</h1>{" "}
        <img src={img[0]} alt={img[1]} className="img-fluid mobile-img" />
      </article>
      <article className="d-flex align-items-center">
        {children}
        <img src={img[0]} alt={img[1]} className="img-fluid img" />
      </article>
    </div>
  );
}

export default Section;

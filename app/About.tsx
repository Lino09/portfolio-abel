import { Title, Container } from "@/components";
import jest from "@/public/jest.png";
import css from "@/public/css.svg";
import figma from "@/public/figma.svg";
import golang from "@/public/golang.svg";
import html from "@/public/html.svg";
import node from "@/public/node.svg";
import python from "@/public/python.svg";
import react from "@/public/react.png";
import tailwindcss from "@/public/tailwindcss.svg";
import ts from "@/public/ts.svg";
import vue from "@/public/vue.svg";
import Image from "next/image";
import javascript from "@/public/java-script.png";

const images = [
  javascript,
  ts,
  css,
  html,
  jest,
  figma,
  golang,
  node,
  python,
  react,
  tailwindcss,
  vue,
];

const About = ({ language }: any) => {
  return (
    <Container>
      <Title type="subtitle" variant="blue" className="mt-24 mb-16">
        {language.title}
      </Title>
      <div className="flex w-full flex-wrap" id="about">
        <div className="flex w-full lg:w-1/2 flex-col items-center">
          <Title type="section" variant="orange">
            {language.myStory.title}
          </Title>

          <div
            dangerouslySetInnerHTML={{ __html: language.myStory.description }}
            className="flex flex-col gap-4 font-sans px-4 py-8 text-lg"
          ></div>
        </div>
        <div className="flex w-full lg:w-1/2 flex-col items-center">
          <Title type="section" variant="sky">
            {language.technologiesILove.title}
          </Title>
          <div
            dangerouslySetInnerHTML={{
              __html: language.technologiesILove.description,
            }}
            className="flex flex-col gap-4 font-sans px-4 py-8 text-lg"
          ></div>
        </div>
      </div>
      <ul className="flex gap-4 mt-4 mb-16 flex-wrap">
        {images.map((image) => (
          <li key={image.src}>
            <Image
              src={image.src}
              alt={"loved technology"}
              width={64}
              height={64}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default About;

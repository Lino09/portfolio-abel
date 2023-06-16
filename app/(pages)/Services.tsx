import { Button, Container, Title } from "@/components";
import webdev from "@/public/webdev.png";
import training from "@/public/training.png";
import skyscraper from "@/public/skyscraper.png";
import Image from "next/image";

const images = [webdev, training, skyscraper];

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="flex gap-2 justify-around">
    {tags.map((tag, index) => {
      const color = {
        1: "bg-blue-300 text-indigo-700",
        2: "bg-green-300 text-green-800",
        3: "bg-purple-300 text-purple-800",
        0: "bg-orange-300 text-orange-800",
      };
      const colorIndex = (index % 4) as keyof typeof color;

      return (
        <span
          key={tag}
          className={`text-xs font-sans font-semibold px-2 py-1 rounded-md ${color[colorIndex]}`}
        >
          {tag}
        </span>
      );
    })}
  </ul>
);

const Services = ({ language }: any) => {
  return (
    <Container>
      <span id="services">{language.title}</span>
      <Title
        type="subtitle"
        variant="blue"
        className="text-center text-xl md:text-3xl"
      >
        {language.subtitle}
      </Title>
      <ul className="flex w-full mt-24 flex-wrap">
        {language.cards.map(
          (
            {
              title,
              description,
              tags,
            }: { title: string; description: string; tags?: string[] },
            index: number
          ) => {
            return (
              <li className="w-full md:w-1/2 lg:w-1/3 p-2" key={title}>
                <div className="bg-black rounded-3xl h-full">
                  <div
                    className="bg-white rounded-3xl border border-r-4 border-b-4 border-black p-8 h-full
                flex flex-col gap-4 justify-between
                transform transition-transform hover:-translate-x-2 hover:-translate-y-2 hover:bg-indigo-50"
                  >
                    <div className="h-36">
                      <Image
                        src={images[index].src}
                        width={128}
                        height={128}
                        alt="icon"
                      />
                    </div>
                    <span>{title}</span>
                    <span className="font-sans text-base">{description}</span>
                    {tags && <Tags tags={tags} />}
                    <a href="#contact">
                      <Button
                        variant="secondary"
                        className="w-full py-4 mt-auto self-end"
                        onClick={() => {}}
                      >
                        {language.button} &rarr;
                      </Button>
                    </a>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </Container>
  );
};

export default Services;

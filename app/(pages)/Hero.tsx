import { Title, Button, Container } from "@/components";
import Image from "next/image";

const Hero = ({ language }: any) => {
  return (
    <Container>
      <div className="py-32 flex flex-col xl:flex-row gap-40 xl:gap-0 items-center ">
        <div className="w-full xl:w-1/2 px-4 flex flex-col gap-8 items-start">
          <span>{language.title}</span>
          <Title
            type="subtitle"
            variant="blue"
            className="text-start text-xl md:text-3xl"
          >
            {language.description}
          </Title>
          <a href="#about">
            <Button onClick={() => null} variant="primary">
              {language.cta}
            </Button>
          </a>
        </div>
        <div className="w-full xl:w-1/2 px-4 flex justify-center items-center">
          <div className="bg-bit-green border-8 border-black relative rounded">
            <Image src="/Abel.png" width={320} height={320} alt="Abel photo" />

            <Image
              className="absolute -top-24 p-2 box-content border-4 rounded border-black bg-bit-sky hover:scale-125 transition-transform duration-500"
              src="/design.png"
              width={48}
              height={48}
              alt="ui/ux design"
            />
            <Image
              className="absolute -top-16 right-12 p-2 box-content border-4 rounded border-black bg-bit-pink hover:scale-125 transition-transform duration-500"
              src="/htmlcss.png"
              width={48}
              height={48}
              alt="html and css"
            />
            <Image
              className="absolute left-4 top-60 lg:-left-24 lg:top-12 p-2 box-content border-4 rounded border-black bg-bit-orange hover:scale-125 transition-transform duration-500"
              src="/java-script.png"
              width={48}
              height={48}
              alt="javascript"
            />
            <Image
              className="absolute right-12 top-48 lg:-right-28 lg:top-0 bg-bit-yellow p-2 box-content border-4 rounded border-black hover:scale-125 transition-transform duration-500"
              src="/react.png"
              width={48}
              height={48}
              alt="react"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Hero;

// <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by edt.im - Flaticon</a>
// <a target="_blank" href="https://icons8.com/icon/54087/nodejs">Nodejs</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

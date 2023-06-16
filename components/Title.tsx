type TitleProps = {
  children: React.ReactNode | string;
  variant: "purple" | "sky" | "green" | "orange" | "pink" | "yellow" | "blue";
  type: "title" | "subtitle" | "section";
  className?: string;
};

const Title = ({ children, variant, type, className = "" }: TitleProps) => {
  const variantColor = {
    pink: "text-bit-pink",
    purple: "text-bit-purple",
    green: "text-bit-green",
    sky: "text-bit-sky",
    yellow: "text-bit-yellow",
    orange: "text-bit-orange",
    blue: "text-bit-blue",
    black: "text-black",
  };
  if (type === "title")
    return (
      <h1
        className={`text-4xl font-bold ${className} ${variantColor[variant]}`}
      >
        {children}
      </h1>
    );
  if (type === "subtitle")
    return (
      <h2
        className={`text-3xl font-bold ${className} ${variantColor[variant]}`}
      >
        {children}
      </h2>
    );
  return (
    <h3 className={`text-xl font-bold ${className} ${variantColor[variant]}`}>
      {children}
    </h3>
  );
};

export default Title;

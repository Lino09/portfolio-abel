const Container = ({ children }: { children: any }) => (
  <div className="w-full flex flex-col items-center justify-start">
    <div className="w-full max-w-7xl flex flex-col items-center justify-start px-2 lg:px-0">
      {children}
    </div>
  </div>
);

export default Container;

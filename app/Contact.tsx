const Contact = ({ language }: any) => {
  return (
    <div className="bg-white py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-bit-blue">
                {language.title}
              </h2>
              <p className="mt-4 leading-7 text-gray-600 font-sans text-xl">
                {language.description}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {language.contactInfo.map((item: any) => (
                <div
                  key={item.title}
                  className="rounded bg-gray-100 p-10 flex flex-col items-center justify-center border-4 border-black"
                >
                  <h3 className="text-base font-semibold leading-7 text-gray-900">
                    {item.title}
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">{item.title}</dt>
                      <dd>
                        <span className="font-semibold text-indigo-600 hover:cursor-pointer mt-2 block tracking-widest">
                          {item.value[0]}
                        </span>
                      </dd>
                      <dd>
                        <span className="font-semibold text-indigo-600 hover:cursor-pointer mt-2 block tracking-widest">
                          {item.value[1]}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

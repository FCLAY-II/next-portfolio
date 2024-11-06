import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-10 lg:px-14 xl:px-36">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain"/>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Оля самая нереальная нереалка!!!
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Здесь надо написать много текста про себя
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Посмотреть мои работы
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Связаться со мной
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

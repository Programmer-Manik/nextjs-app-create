import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <h2 className="text-center text-4xl">Welcome to the Gallery page</h2>
      <h2 className="text-center text-4xl my-4">regular img tag</h2>
      <img
        width={500}
        height={500}
        className="mx-auto"
        src="https://nextjs.org/api/docs-og"
        alt=""
      />

      <h2 className="text-center text-4xl my-4">Optimize Image show</h2>
      <Image
        className="mx-auto"
        src="https://nextjs.org/api/docs-og"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Gallery;

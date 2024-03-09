import Image from "next/image";
import nextImage from '@/assets/docs.png'


export const metadata = {
   title: "gallery | image",
   description: "this is gallery image components",
 };


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

      <h2 className="text-center text-4xl my-4">local images </h2>
      <Image
        className="mx-auto"
        src={nextImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Gallery;

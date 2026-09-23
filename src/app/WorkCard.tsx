import Image from "next/image";

const WorkCard = ({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white text-black relative overflow-hidden rounded-lg group flex flex-col md:size-60 items-center p-4">
      <div className="relative my-1">
        <Image
          src={imageUrl}
          alt={title}
          className="object-contain"
          width={110}
          height={110}
        />
      </div>
      <div className="text-left">
        <h3 className="text-lg sm:text-xl text-center font-bold font-space-grotesk">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-center mt-1">{description}</p>
      </div>
    </div>
  );
};

export default WorkCard;

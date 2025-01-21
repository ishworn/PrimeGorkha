import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name,  image, content } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
      
        </div>
        <div style={{ width: '60px', height: '60px', overflow: 'hidden', borderRadius: '50%' }}>
  <Image
    width={60}
    height={60}
    style={{ objectFit: 'cover' }} // Ensures image is centered and cropped if necessary
    src={image}
    alt={name}
  />
</div>


      </div>

      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;

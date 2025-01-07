import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


interface BgImage {
  post_name: string;
  bg_image: any;
}

export const revalidate = 10;

const HeroSection = async () => {
  const query = `*[_type=='post_image']{
        post_name, bg_image
      }`

  const post: BgImage[] = await client.fetch(query)
  console.log(post);


  return (
    <div className="overflow-x-hidden">
      {post.map((indx, i) => (
        <div key={i} className="flex items-center justify-center h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[716.83px]  bg-cover bg-center   "
          style={{
            backgroundImage: `url(${urlFor(indx.bg_image).url()})`,

          }} >
          <p className="text-white text-[35px] lg:text-[50px] font-[600]"> {indx.post_name} </p>
        </div>
      ))}
    </div>
  )
}


export default HeroSection;

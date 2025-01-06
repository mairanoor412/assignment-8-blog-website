import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface BgImage {
  post_name: string;
  bg_image: any;
}


const HeroSection = async () => {
  const query = `*[_type=='post_image']{
        post_name, bg_image
      }`

  const post: BgImage[] = await client.fetch(query)
  console.log(post);


  return (
    <div>
      {post.map((indx, i) => (
        <div key={i} className="flex items-center justify-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[716.83px]  bg-cover bg-center   "
          style={{
            backgroundImage: `url(${urlFor(indx.bg_image).url()})`,
           
            
            

          }}
        >

          <p className="text-white text-[40px] font-[600]"> {indx.post_name} </p>

        </div>
      ))}
    </div>
  )
}


export default HeroSection;

{/* <div className="bg-[url('/image/hero-section/scandinavian-interior-mockup-wall-decal-background-1.png')] h-[250px] sm:h-[350px] md:h-[550px] lg:h-[600px] xl:h-[716.83px]  bg-cover bg-center   "> */ }
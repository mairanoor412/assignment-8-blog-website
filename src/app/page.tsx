
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/hero-section/hero-section";


interface IBlog {
  image: any;
  title: string;
  description: string;
  slug: string;
}

export const revalidate = 10;

const Home = async () => {
  const query = `*[_type=='post'] | order(_createdAt asc)  {
  image,title,description,
    "slug":slug.current
}`

  const posts: IBlog[] = await client.fetch(query);
  console.log(posts);

  return (
    <div className="h-auto mb-10">
      <HeroSection></HeroSection>
      <p className="text-[40px] text-center text-black font-[700] pt-10"> Recent Blogs</p>
      <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px] bg-white ">
     
        {posts.map((blogs) => (
          <div key={blogs.slug} className="transition-transform transform hover:scale-105 hover:translate-y-2 duration-500 ease-out">
            {/* container */}

            {/* card */}
            
            <div className="w-[285px] sm:w-[320px] h-auto bg-white shadow-xl rounded-[10px] px-3 py-5">
            <Link href={`/blog/${blogs.slug}`} target="_blank">
              <Image src={urlFor(blogs.image).width(250).height(200).url()} 
              alt={blogs.title} width={250} height={200} className="w-[250px] h-[200px] m-auto py-2" />
              <h1 className="text-[20px]  font-[600] mt-4 line-clamp-1 text-black"> {blogs.title} </h1>
             
              <p className="my-3 text-[16px] line-clamp-4 text-black"> {blogs.description} </p>
            
             <p className="flex justify-end text-[14px] hover:text-blue-900 hover:font-[800] pr-3"> Read More... </p>
             </Link>
             

            </div>

          </div>


        ))
        }
      </div >


    </div>
  )
}

export default Home;
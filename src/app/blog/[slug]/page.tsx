import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from '@portabletext/react'

export const revalidate = 10;

const Blog = async ({ params: { slug } }: { params: { slug: string } }) => {
    const query = `*[_type=='post' && slug.current=="${slug}"]{
  title,description,image,content
}[0]`

    const post = await client.fetch(query)
    console.log(post);


    return (
        <div className="bg-white text-black">
            <Image src={urlFor(post.image).url()}
                alt={post.title} width={250} height={200} className="w-full h-[320px] md:w-[600px] md:h-[400px] lg:w-[1000px] lg:h-[450px] md:m-auto py-2" />
            <div className="min-w-full px-5 py-10 sm:px-8 md:px-10 flex flex-col  ">
            <p className="text-[30px] font-[700] py-5"> {post.title} </p>
            <p className="leading-8 text-[16px] lg:text-[18px] tracking-normal text-justify"> {post.description} </p>
            {/* content of blog */}

            <section className="prose-p:text-justify prose-p:tracking-normal prose-h2:font-bold prose-h2:text-[30px]  prose-h3:text-[30px] prose-strong:text-[20px]  prose-h3:font-[600] prose-p:text-[16px] lg:prose-p:text-[18px] prose-p:leading-7 prose-h3:py-5 prose-h2:py-5 prose-li:list-disc prose-li:list-inside prose-li:marker:text-red-800 prose-li:leading-10 prose-li:tracking-normal">
                <PortableText value={post.content} />
            </section>
            </div>

        </div>
    )
}

export default Blog;
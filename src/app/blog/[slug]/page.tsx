import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import {PortableText} from '@portabletext/react'

export const revalidate = 10;

const Blog = async ({ params: { slug } }: { params: { slug: string } }) => {
    const query = `*[_type=='post' && slug.current=="${slug}"]{
  title,description,image,content
}[0]`

    const post = await client.fetch(query)
    console.log(post);


    return (
        <div>
            <Image src={urlFor(post.image).width(250).height(200).url()}
                alt={post.title} width={250} height={200} className="w-[250px] h-[200px] m-auto py-2" />

            <p className="text-[30px] font-[700]"> {post.title} </p>
            <p className="leading-relaxed text-[16px]"> {post.description} </p>
            {/* content of blog */}
            
            <section className="prose-h2:text-[20px] prose-h2:font-bold prose-h3:text-[50px] prose-h3:font-[600] prose-p:text-[16px] prose-p:leading-relaxed prose-h3:h-[40px] prose-h3:bg-slate-600">
                <PortableText value={post.content} />
            </section>
        
           
        </div>
    )
}

export default Blog;
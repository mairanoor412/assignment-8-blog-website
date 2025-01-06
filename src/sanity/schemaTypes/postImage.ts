import { defineField, defineType } from "sanity";





const PostImage = defineType({
    title: "PostImage",
    name: "post_image",
    type: "document",
    fields: [
        defineField({
            title: "PostName",
            name: "post_name",
            type: "string",
            description: "Title of the post",
            validation: Rule => Rule.required().error("This field is rquired")
        }),
       
        // Image
        defineField({
            title: "BgImage",
            name: "bg_image",
            type: "image",
        }),
    ]
})

export default PostImage;
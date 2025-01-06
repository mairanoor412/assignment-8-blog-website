import { sources } from "next/dist/compiled/webpack/webpack";
import { Rule } from "postcss";
import { title } from "process";
import { defineArrayMember, defineField, defineType } from "sanity";




const PostType = defineType({
    title: "Post",
    name: "post",
    type: "document",
    fields: [
        defineField({
            title: "Title",
            name: "title",
            type: "string",
            description: "Title of the post",
            validation: Rule => Rule.required().error("This field is rquired")
        }),

        // slug field
        defineField({
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
               source: "title"   /*Will take it by name*/

            },
            validation: Rule =>Rule.required().error("This field is rquired")
        }),

        // description
        defineField({
            title: "Description",
            name: "description",
            type: "text",
            description: "Description of the post",
            validation: Rule=> Rule.required().error("This field is rquired")
        }),

        // Image
        defineField({
            title: "Image",
            name: "image",
            type: "image",
        }),

        // Blog content
        defineField({
            title: "Content",
            name: "content",
            type: "array",
            of:[
                defineArrayMember({
                    type: 'block'
                })
            ]
        }),
        defineField({
            title: "Author",
            name: "author",
            type: "reference",
            to:[{
                type: "author"
            }]
        }),

       

    ]
})

export default PostType;


  // defineField({
        //     title: "Post Gender",
        //     name: "post_gender",
        //     type: "string",
        //     options: {
        //         list: [
        //             { title: 'Male', value: 'male' },
        //             { title: 'Female', value: 'female' }
        //         ],
        //         layout: "dropdown",

        //     }
        // })

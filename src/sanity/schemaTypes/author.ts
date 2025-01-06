import { defineField, defineType } from "sanity";




const Author = defineType({
    title: "Author",
    name: "author",
    type: "document",
    fields: [
        defineField({
            title: "AuthorName",
            name: "name",
            type: "string",
        }),

        // Author Bio
        defineField({
            title: "Bio",
            name: "bio",
            type: "text"
        }),

        // Author itmage
        defineField({
            title: "Image",
            name: "image",
            type: "image",
            options: {
                hotspot: true
            }
        })
    ]
})

export default Author;
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blogEN = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog/en' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    locale: z.string(),
  }),
})

const blogES = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog/es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    locale: z.string(),
  }),
})

const notesEN = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes/en' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    locale: z.string(),
  }),
})

const notesES = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes/es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    locale: z.string(),
  }),
})

const projectsEN = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects/en' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    locale: z.string(),
  }),
})

const projectsES = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects/es' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    slug: z.string(),
    locale: z.string(),
  }),
})

export const collections = {
  blogEN,
  blogES,
  notesEN,
  notesES,
  projectsEN,
  projectsES,
}

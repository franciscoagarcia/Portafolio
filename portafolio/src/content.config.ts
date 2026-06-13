import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    titulo: z.string(),
    Desarrollador: z.string(),
    fecha: z.string(),
    imagen: z.string(),
    repositorio: z.string().url(),
    gitclone: z.string(),
    stack: z.string(),
  }),
});

export const collections = { projects };

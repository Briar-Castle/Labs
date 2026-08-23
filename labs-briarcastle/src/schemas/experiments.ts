// src/validators/experiments.ts

import { z } from "zod";

const linksSchema = z.object({
  name: z.string(),
  link: z.url().optional(),
  unavailable: z.boolean()
})

const StackSchema = z.object({
  bundler: z.string().optional(),
  frameworks: z.array(z.string()).optional(),

  third_party: z.object({
    libraries: z.array(z.string()).optional(),
    components: z.array(z.string()).optional(),
  }).optional(),
  platforms: z.object({
    web: z.object({
      backend: z.array(z.string()).optional(),
      frontend: z.array(z.string()).optional(),
    }).optional(),
    registry: z.array(z.string()).optional()
  }).optional(),
  languages: z.array(z.string()).optional(),
});

const ExperimentSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),

  status: z.enum([
    "active",
    "inProgress",
    "archived",
  ]),
  featured: z.boolean(),
  visibility: z.enum([
    "public",
    "private",
    "internal",
  ]),

  version: z.string(),

  created: z.coerce.date(),
  updated: z.coerce.date(),
  published: z.coerce.date().nullable(),

  category: z.array(z.string()),
  stack: StackSchema,

  topics: z.array(z.string()),
  series: z.array(z.string()),

  license: z.string(),

  links: z.object({
    website: linksSchema,
    github: linksSchema,
    documentation: linksSchema,
    design: linksSchema,
    demo: linksSchema.optional(),
    npm: linksSchema.optional(),
  }),

  thumbnail: z.boolean(),
  thumbnail_img: z.string(),
  order: z.number(),

  repository: z.object({
    stars: z.any().optional(),
    forks: z.any().optional(),
  }).optional(),

  completion: z.number(),
  reading_time: z.number(),

  notes: z.array(z.string()),
});

export const ExperimentsValidator = z.object({
  cards: z.array(ExperimentSchema),
});

export type Experiment = z.infer<typeof ExperimentSchema>;
export type Experiments = z.infer<typeof ExperimentsValidator>;
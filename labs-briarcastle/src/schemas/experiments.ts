// src/validators/experiments.ts

import { z } from "zod";

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
  purpose: z.string(),
  description: z.string(),

  status: z.enum([
    "active",
    "in-progress",
    "archived",
  ]),

  featured: z.boolean(),
  visibility: z.enum([
    "public",
    "private",
    "internal",
  ]),

  version: z.string(),

  created: z.string(),
  updated: z.string(),
  published: z.string(),

  category: z.array(z.string()),
  stack: z.array(StackSchema),

  topics: z.array(z.string()),
  series: z.array(z.string()),

  license: z.string(),

  links: z.object({
    website: z.string().optional(),
    github: z.string().optional(),
    documentation: z.string().optional(),
    design: z.string().optional(),
    demo: z.string().optional(),
    npm: z.string().optional(),
  }),

  media: z.object({
    thumbnail: z.string(),
    banner: z.string(),
    icon: z.string(),
  }),

  thumbnail: z.boolean(),
  order: z.number(),

  tags: z.array(z.string()),

  repository: z.object({
    stars: z.any().optional(),
    forks: z.any().optional(),
  }),

  completion: z.number(),
  reading_time: z.number(),

  notes: z.array(z.string()),
});

export const ExperimentsValidator = z.object({
  cards: z.array(ExperimentSchema),
});

export type Experiment = z.infer<typeof ExperimentSchema>;
export type Experiments = z.infer<typeof ExperimentsValidator>;
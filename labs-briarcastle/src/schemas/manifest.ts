import { z } from "zod";

export const ManifestSchema = z.object({
    version: z.string(),
    published: z.coerce.date().nullable(),
    updated: z.coerce.date()
})

export type Manifest = z.infer<typeof ManifestSchema>
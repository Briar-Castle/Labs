import YAML from 'yaml';
import experimentsRaw from '../data/experiments.yml?raw';
import manifestRaw from '../data/manifest.yml?raw';
import { ExperimentsValidator, type Experiments } from '../schemas/experiments';
import { ManifestSchema, type Manifest } from '../schemas/manifest';

const parsedExperiments = YAML.parse(experimentsRaw)
const parsedManifest = YAML.parse(manifestRaw)

export const experiments: Experiments = ExperimentsValidator.parse(parsedExperiments)
export const manifest: Manifest = ManifestSchema.parse(parsedManifest)
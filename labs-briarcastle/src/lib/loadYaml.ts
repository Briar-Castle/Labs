import YAML from 'yaml';
import raw from '../data/experiments.yml?raw';
import { ExperimentsValidator } from '../schemas/experiments';
import type { Experiments } from '../schemas/experiments';

const parsed = YAML.parse(raw)

export const experiments: Experiments = ExperimentsValidator.parse(parsed)


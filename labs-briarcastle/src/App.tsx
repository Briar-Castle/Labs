import { experiments } from "./lib/loadYaml"
// import type { Experiments, Experiment } from "./schemas/experiments";

experiments.cards.map((experiment) => {
  console.log(experiment)
})

export default function App () {
  return (
    <h1>
      Hello!
    </h1>
  )
}
import { experiments } from "./lib/loadYaml"
import Hero from "./components/Hero"
import { manifest } from "./lib/loadYaml"
import Body from "./components/Body"
import { useEffect } from "react"
import LenisProvider from './components/Scroll.tsx';
// import type { Experiments, Experiment } from "./schemas/experiments";

let active: number = 0
let inProgress: number = 0
let archive: number = 0
let totalExperiments: number = active + inProgress + archive
const dateUp: Date = manifest.updated

experiments.cards.map((experiment) => {
  totalExperiments++
  switch (experiment.status) {
    case "active":
      active++
      break;
    case "archived":
      archive++
      break;
    case "inProgress":
      inProgress++
      break;
    default:
      console.log("UNKNOWN")
  }
})

export default function App() {

  return (
    <>
      <Hero active={active} inProgress={inProgress} archive={archive} totalExperiments={totalExperiments} lastUpdated={dateUp} />
      <Body />
      <LenisProvider />
    </>
  )
}
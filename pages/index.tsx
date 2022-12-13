import Statistics from "../components/home/statistics/statistcs";
import Dashboard from "../components/home/dashboard/dashboard";
import * as C from './styles'
export default function Home() {
  return (
    <C.Container>
      <Statistics />
      <Dashboard />
    </C.Container>
  )
}

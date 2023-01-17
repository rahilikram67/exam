import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routes, DashboardSubRoutes } from './pages/routes'
import RouterElement from "./parts/RouterElement"

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {
          Object.entries(routes).map((r, i) => <Route key={i} path={r[0]} element={(
            <RouterElement element={r[1]} />
          )} />)
        }
        <Route path="dashboard" element={DashboardSubRoutes.parent}>
          {Object.entries(DashboardSubRoutes.child).map((r, i) => (
            <Route index={i == 0} key={i} path={`/dashboard/${r[0]}`} element={<RouterElement element={r[1]} />} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

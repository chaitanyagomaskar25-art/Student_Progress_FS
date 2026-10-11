import { RouterProvider } from "react-router"
import { router } from "./routers/router"

export const App = ()=>{
return(
    <RouterProvider router={router} />
)
}


import { ReactNode, Suspense } from "react"

interface Props {
    element: ReactNode
}
export default function RouterElement({ element }: Props) {
    return <Suspense fallback={<div>loading...</div>}>
        {element}
    </Suspense>
}
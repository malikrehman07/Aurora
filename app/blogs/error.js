"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react"

export default function Error({ reset }) {
    const router = useRouter();
    return (
        <>
            <div style={{ padding: 40 }}>
                <h1>Something went wrong!</h1>
                <p>Please try again later.</p>

                {/* //  This button will retry the rendering of the component */}
                {/* <button onClick={() => window.location.reload()}>Retry</button> */}

                {/* // This button will use next.js router to refresh the page and reset the error boundary */}
                <button onClick={() => { startTransition(() => { router.refresh(), reset() }) }}>Retry</button>
            </div>
        </>
    )
}

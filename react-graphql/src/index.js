import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'

// Possible components 
const components = {
    Article: React.lazy(() => import("./Article")),
    Recipe: React.lazy(() => import("./Recipe"))
}

// find all component wrappers and initialise
const wrappers = document.querySelectorAll("[data-react]")
wrappers.forEach(wrapper => {
    const RequiredComponent = components[wrapper.dataset.react] 
    if(!RequiredComponent) return; // Stop if no matching component

    const props = wrapper.dataset.props ? JSON.parse(wrapper.dataset.props) : {}

    const Component = (
        <Suspense fallback={<div>Loading...</div>}>
            <RequiredComponent {...props} />
        </Suspense>
    )

    ReactDOM.render(
        Component,
        wrapper
    )
})
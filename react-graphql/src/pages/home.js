import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'

import Article from '../Article';
import getData from '../lib/graphql'

export default async function() {

    const data = await getData('home');

    const wrapper = document.querySelector('[data-react-component="articles"]')

    const articles = data.data.posts.nodes.map((post => {
        return <Article {...post} key={post.title} />
    }))

    ReactDOM.render(
        articles,
        wrapper
    )
}
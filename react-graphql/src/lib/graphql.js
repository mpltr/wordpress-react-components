function getData(page) {
    return fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: configs[page],
        }),
        })
        .then(res => res.json())
}

export default getData

const configs = {
    home: `{
        posts {
          nodes {
            title
            myfieldgroup {
              subtitle
            }
          }
        }
    }`
}
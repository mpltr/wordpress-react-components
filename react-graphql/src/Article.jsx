import React, { useEffect, useState } from 'react';
import './Article.scss';

const Article = ({id}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    {
                        postBy(postId: ${id}) {
                        title
                        myfieldgroup {
                            subtitle
                        }
                        }
                    }
                  
                `,
            }),
            })
            .then(res => res.json())
            .then(res => setPost(res.data.postBy))
    }, []);

    if(!post) return null;

    const { title, myfieldgroup: { subtitle } } = post; 

    return (
        <div className="Article">
            {title}
            <span>{subtitle}</span>
        </div>
    )
}

export default Article;
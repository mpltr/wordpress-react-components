import React, { useEffect, useState } from 'react';
import './Article.scss';

const Article = ({title, myfieldgroup: { subtitle }}) => { 

    return (
        <div className="Article">
            {title}
            <span>{subtitle}</span>
        </div>
    )
}

export default Article;
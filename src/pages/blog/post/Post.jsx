import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'; // Se quiser adicionar estilos externos

function Post({ title, excerpt, slug, thumbnail }) {
    return (
        <article className="post">
            <Link to={`/posts/${slug}`} className="post-link">
                <div className="post-thumbnail">
                    <img src={thumbnail} alt={`Thumbnail do post: ${title}`} />
                </div>
                <div className="post-content">
                    <h2 className="post-title">{title}</h2>
                    <p className="post-excerpt">{excerpt}</p>
                </div>
            </Link>
        </article>
    );
}

export default Post;
import React from 'react';
import dateFormat from 'dateformat';

const LoadComment = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <h4>{comment.author}</h4>
                    <p style={{ color: 'red' }}>{comment.comment}</p>
                    <p>Rating:{comment.rating}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            );

        })

    );
}

export default LoadComment;
import React from 'react'


const ArticleCard = ({ link, title, pulishDate, updateDate, section }) => {
    return (
        <div className='articleCard'>
            <h4 className='articleTitle'>Source : {title}</h4>
            <div><strong>Published Date : </strong> <span>{pulishDate}</span></div>
            <div><strong>Published Date : </strong> <span>{updateDate}</span></div>
            <div><strong>Section : </strong> <span>{section}</span></div>
            <strong> Visit Article :</strong> <a style={{ textDecoration: 'none' }} href={link} target='_blank' >{link}</a>

        </div>
    )
}

export default ArticleCard

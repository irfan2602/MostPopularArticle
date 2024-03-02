import React from 'react'


const ArticleCard = ({ link, title, pulishDate, updateDate, section, heading,writer,summary }) => {
    return (
        <div className='articleCard'>
            <h4 className='articleTitle'>Article Heading : {title} </h4>
            <div><strong>Article Summary : </strong> <span>{summary}</span></div>
            <div><strong>Source : </strong> <span>{heading}</span></div>
            <div><strong>Writer : </strong> <span>{writer}</span></div>
            <div><strong>Published Date : </strong> <span>{pulishDate}</span></div>
            <div><strong>Published Date : </strong> <span>{updateDate}</span></div>
            <div><strong>Section : </strong> <span>{section}</span></div>
            
            <strong> Visit Article :</strong> <a style={{ textDecoration: 'none' }} href={link} target='_blank' >{link}</a>
        </div>
    )
}

export default ArticleCard

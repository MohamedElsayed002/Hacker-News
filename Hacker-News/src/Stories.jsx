


import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {

  const {isLoading , hits , removeStory} = useGlobalContext()

  if(isLoading) {
    return <h1>Loading..</h1>
  }

  return (
    <section className="stories">
      {
        hits.map((story) => {
          const {objectID,title,num_comments,url,points,author} = story
          return <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} |</span>
              {num_comments}{' '}
              comments
            </p>
            <div>
              <a href={url} className="read-link" target='_blank'>
                read more
              </a>
              <button onClick={() => removeStory(objectID)} className="remove-btn">remove</button>
            </div>
          </article>
        })
      }
    </section>
  )
}

export default Stories
import React from 'react';

const Resource = ({resource}) => {

  // const {resource} = props;

  return (
    <div className={'box'}>
      <h2>{resource.title}</h2>
      <p>{resource.author}</p>
      <p>{resource.authorSkillLevel}</p>
      <p>Published on: {resource.datePublished}</p>
      { resource.videoLength ? (<p>Length: {resource.videoLength} minutes</p>) : null }
      {/* conditional ? true code : false code */}
      <p>Rating: {resource.rating}</p>
      <p>Comments: {resource.comments.length}</p>
      <p>Time to complete: {resource.timeToComplete} minutes</p>
    </div>
  )
}

export default Resource;
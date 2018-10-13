import React from 'react'

export default ({ authorData }) => {
  const { shortBio } = authorData;

  return (
    <div className="col-sm-7">
      <div dangerouslySetInnerHTML={{__html: shortBio.childMarkdownRemark.html}} />
    </div>
  )
}

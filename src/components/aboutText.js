import React from 'react'

export default props => {
  const { shortBio } = props.authorData;

  return (
    <div className="col-sm-7">
      <div dangerouslySetInnerHTML={{__html: shortBio.childMarkdownRemark.html}} />
    </div>
  )
}

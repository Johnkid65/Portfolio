import React from 'react';

function ProjectThumbnail({ image, link }) {
  return (
    <a href={link}>
      <img src={image} alt="Project Thumbnail" />
    </a>
  );
}

export default ProjectThumbnail;
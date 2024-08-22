import React from "react";

type imageProps = {
  src: string;
  alt: string;
  onClick: () => any;
};
const ImageBox: React.FC<imageProps> = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} />;
};

export default ImageBox;

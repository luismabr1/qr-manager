/* "use client";

import { getCldImageUrl } from 'next-cloudinary';
 
export const url = getCldImageUrl({
  width: 960,
  height: 600,
  src: 'ue7h3ziis5lkdewg9q4m'
}); */

"use client";

import { CldImage as CldImageDefault } from "next-cloudinary";

const CldImage = (props) => {

  return <CldImageDefault {...props} />;

};

export default CldImage;


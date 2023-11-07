import noImage from "../assets/NoImage.png";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const cropString = "crop/600/400/";
  return url.slice(0, index) + cropString + url.slice(index);
};

export default getCroppedImageUrl;

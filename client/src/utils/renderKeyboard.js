export const renderKeyboard = (keyboard) => {
  let img = "";

  switch (keyboard) {
    case "V3 87-Key Custom Mechanical Keyboard":
      img =
        "https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/8/7/87.png";
      break;
    case "VP3 61-Key Custom Mechanical Keyboard - White Case":
      img =
        "https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/1/61_whitecase.png";
      break;
    case "VP3 61-Key Custom Mechanical Keyboard":
      img =
        "https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/1/61_1.png";
      break;
    default:
      img =
        "https://www.wasdkeyboards.com/pub/media/catalog/product/cache/924411c816434bc14ad00683e2943d0e/6/2/62.png";
  }
  return img;
};

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    const key = item.replace('./', '').replace('.png', '');
    images[key] = r(item);
  });
  return images;
};

export const img = importAll(require.context('../assets/img', false, /\.png$/));
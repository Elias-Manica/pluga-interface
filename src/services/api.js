import { data } from "./data";

export function getData(page) {
  if (page === 1) {
    return data.slice(0, 12);
  }
  if (page === 2) {
    return data.slice(12, 25);
  }
  if (page === 3) {
    return data.slice(25, 38);
  }
  if (page === 4) {
    return data.slice(38, 51);
  }
  if (page === 5) {
    return data.slice(51, data.length);
  }
  return [];
}

export function findTool(text) {
  const newData = data.filter((item) => {
    const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });

  return newData;
}

export function randomTool(index) {
  return data.slice(index, Number(index + 10));
}

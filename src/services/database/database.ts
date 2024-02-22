import db from "./db.json";

export const getProducts = () => {
  return db.sort((a, b) => a.id - b.id);
};

export const getProduct = (id: number) => {
  return db.find((product) => product.id === id);
};

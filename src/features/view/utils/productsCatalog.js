export const PRODUCTS = [
  { id: "1", title: "Shirt Burnt White", price: 150000, image: "/img/1.jpg" },
  { id: "2", title: "Hoodie Light Blue", price: 200000, image: "/img/2.jpg" },
  { id: "3", title: "Buzo Undergold - Negro", price: 180000, image: "/img/3.jpg" },
  { id: "4", title: "Jeans Brown", price: 120000, image: "/img/4.jpg" }
];

export const formatPrice = (value) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);

let products = [
  {
    id: "1",
    name: "Producto 1",
    description: "Descripcion 1",
    category:"mates",
    stock: 10,
    imagen: "../public/images/mate-1.png",
  },
  {
    id: "2",
    name: "Producto 2",
    description: "Descripcion 2",
    category:"mates",
    stock: 20,
    imagen: "../public/images/mate-2.png",
  },
  {
    id: "3",
    name: "Producto 3",
    description: "Descripcion 3",
    category:"mates",
    stock: 30,
    imagen: "../public/images/mate-3.png",
  },
  {
    id: "4",
    name: "Producto 4",
    description: "Descripcion 4",
    category:"articulated",
    stock: 40,
    imagen: "../public/images/articulated-1.png",
  },
  {
    id: "5",
    name: "Producto 5",
    description: "Descripcion 1",
    category:"articulated",
    stock: 10,
    imagen: "../public/images/articulated-2.png",
  },
  {
    id: "6",
    name: "Producto 6",
    description: "Descripcion 2",
    category:"articulated",
    stock: 20,
    imagen: "../public/images/articulated-3.png",
  },
  {
    id: "7",
    name: "Producto 7",
    description: "Descripcion 3",
    category:"smartphones",
    stock: 30,
    imagen: "../public/images/smartphone-1.png",
  },
  {
    id: "8",
    name: "Producto 8",
    description: "Descripcion 4",
    category:"smartphones",
    stock: 40,
    imagen: "../public/images/smartphone-2.png",
  },
];

//una Promise puede contener 3 estados:
//  .Pendiente
//  .Rechazada
//  .Completada

//Puede contener 2 argumentos res(resuelto), rej(rechazado)
export const gFetch = () =>
  new Promise((res, rej) => {
    //acciones de mi Promise
    let condition = true;
    if (condition) {
      setTimeout(() => {
        res(products);
      }, 1500);
    } else {
      rej("hay error");
    }
  });

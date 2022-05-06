# Nutripets BARF Boyacá  :dog:

  Este proyecto está desarrollado para el curso React JS de Coderhouse.
  
El mismo corresponde una aplicación web de e-commerce para una empresa que vende alimentos para mascotas en el departamento de Boyacá, Colombia.

## 📇 Índice

 - [🛠️ Construido con...](../../../nutripets-barf#%EF%B8%8F-construido-con)
 - [⚙️Funcionamiento](../../../nutripets-barf#%EF%B8%8Ffuncionamiento)
 - [🧬Estructura del proyecto](../../../nutripets-barf#estructura-del-proyecto)


## 🛠️ Construido con...
Este proyecto fue construido con las siguientes herramientas:

 - Framework Javascript: [Node.js](https://nodejs.org/es/)
 - Librería web: [React.js](https://es.reactjs.org/) 
 - Librería diseño: [Material UI](https://mui.com/)

## ⚙️Funcionamiento
Esta aplicación permite al usuario realizar el siguiente circuito:

 1. Seleccionar un elemento para ver los detalles.
 2. Seleccionar la cantidad de items del elemento que se desea comprar.
 3. Agregarlo al carrito de compras.
 4. Seleccionar otros elementos como en los pasos 1 a 3.
 5. Ver el carrito de compras.
 6. Simular una compra ingresando datos en un formulario (no incluye validación de campos).

### 🎞️ GIF

![Navigation](https://github.com/Kitsunito/nutripets-barf/blob/main/public/Navigation.gif?raw=true)

## 🧬Estructura del proyecto
El proyecto está conformado por la siguiente estructura:
### 📃 Pages
 - **CartPage**: se encarga de mostrar los componentes Cart y EmptyCart.
 - **ItemDetailContainer**: renderiza el componente ItemDetail.
 - **ItemListContainer**: contiene a la lista de elementos del componente ItemList.
 - **NotFound**:  muestra el error al intentar acceder a un link incorrecto.
### 🌐 Context
En este proyecto solo se utiliza el context correspondiente al carrito de compras, **CartContext**.
El mismo utiliza el hook _useState_ para almacenar en el estado CartProducts los elementos del carrito.

A su vez, incluye las siguientes funciones que permiten manejar el comportamiento del carrito:

 - **isInCart(_id_)**: valida si se encuentra en el carrito algún elemento con el _id_ indicado como parámetro.
 - **addProductToCart(_product_)**: valida si el producto se encuentra en el carrito. En caso de estar, actualiza la cantidad de items seleccionados del mismo, en función de la cantidad que tenga el _product_ indicado como parámetro; en caso de no estar en el carrito, lo agrega.
 - **removeProduct(_id_)**: remueve el producto cuyo _id_ se pase como parámetro.
 - **clearCart()**: vacía el carrito.
 - **totalPrice()**: calcula el precio total del carrito.
 
 

### 🧩Components
 - **Cart**: muestra el detalle de la compra, agrupando por producto, la cantidad, el subtotal, etc. También permite eliminar cada elemento del carrito.
 - **CategoriesButton**: muestra un Menu con una opción por cada categoría de productos.
 - **EmptyCart**:  muestra un aviso de que el carrito está vacío y un botón 
 - **Item**: muestra un resumen de un producto.
 - **ItemCount**: selector de cantidad del producto a añadir al carrito (límite inferior 1 límite superior: stock) y permite incorporar al carrito el elemento.
 - **ItemDetail**: muestra el detalle con todas la información del producto y permite añadirlo al carrito desde el ItemCount incluído.
 - **ItemList**: muestra el listado de todos los productos o los de determinada categoría en función de los parámetros pasados.
 - **LinearIndeterminate**: muestra una línea que va avanzando como indicador de carga.
 - **Modal**: base para implementar dialogs.
 - **NavBar**: corresponde al header de la página, incluyendo el brand, y el menú (compuesto por un botón de inicio
 - **OrderReceipt**: muestra la confirmación de la compra.
 - **ShoppingCartWidget**: muestra el ícono del carrito de compras con la cantidad de elementos diferentes que contiene. Permite mostrar el detalle del contenido del carrito, así como también eliminar elementos del mismo o finalizar la compra.

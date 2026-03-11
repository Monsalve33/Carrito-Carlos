# Undergold

## Descripcion
Undergold es una aplicacion web desarrollada con React y Vite orientada a la visualizacion de productos, ofertas y gestion basica de interacciones del usuario dentro de una tienda online. El proyecto incluye una interfaz moderna construida con Material UI, navegacion entre vistas y manejo local de favoritos, carrito y formulario de acceso con validaciones en frontend.

## Caracteristicas principales
- Navegacion SPA mediante `react-router-dom`.
- Pagina principal con catalogo visual de productos.
- Vista de ofertas y articulos destacados.
- Seccion de favoritos usando almacenamiento local del navegador.
- Seccion de compras con gestion de carrito en frontend.
- Formulario de acceso con validaciones visuales del lado cliente.
- Interfaz responsive apoyada en Material UI e iconografia moderna.

## Interfaz grafica
La interfaz fue planteada con un enfoque visual limpio y comercial, usando una barra de navegacion superior, tarjetas de producto, indicadores de favoritos y carrito, y una vista de cuenta con estilo elegante. La experiencia esta pensada para desktop y dispositivos moviles, manteniendo consistencia en colores, tipografia, espaciado y jerarquia visual.

Pantallas principales:
- `Inicio`: muestra productos destacados y accesos de compra.
- `Articulos`: presenta contenido visual adicional del catalogo.
- `Ofertas`: concentra productos o promociones especiales.
- `Mi Cuenta`: contiene el formulario de login con validaciones frontend.
- `Favoritos`: lista productos marcados por el usuario.
- `Mis Compras`: visualiza el carrito o historial simulado de compras.

## Arquitectura del Proyecto
El proyecto sigue una organizacion modular dentro de `src`, separando responsabilidades por funcionalidad:

```text
src/
  App.jsx
  main.jsx
  features/
    auth/
      components/
        Account.jsx
        Favorites.jsx
        Purchases.jsx
    layout/
      components/
        Header.jsx
        Content.jsx
        Footer.jsx
    view/
      components/
        Article.jsx
        Offers.jsx
      hooks/
      utils/
        cartStorage.js
        favoritesStorage.js
        productsCatalog.js
```

Descripcion general de capas:
- `layout/components`: estructura comun de la aplicacion como encabezado, contenido principal y pie de pagina.
- `auth/components`: vistas relacionadas con cuenta, favoritos y compras.
- `view/components`: pantallas orientadas a la exploracion del contenido.
- `view/utils`: utilidades para catalogo, favoritos y carrito con persistencia local.
- `view/hooks`: ejemplos y practicas con hooks de React.

Tecnologias utilizadas:
- `React 19`
- `Vite`
- `Material UI`
- `React Router DOM`
- `React Icons`
- `ESLint`

## Datos importantes del Autor

- Autor: `Edward Alfonso Arrieta Monsalve`
- Correo: `edwardarrietamonsa@gmail.com`

## Ejecucion local
Para ejecutar el proyecto en desarrollo:

```bash
npm install
npm run dev
```

Para generar una build de produccion:

```bash 
npm run build
```

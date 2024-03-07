# PRERREQUISITOS

* Node.js >= 20
* NPM > 10 (También podría ser compatible con Yarn)

# PASOS INSTALACIÓN

  * Clonar repositorio.
  * Instalar los paquetes en el backend (en la raiz del proyecto).
  * Instalar paquetes en el frontend (carpeta cliente).
  * Crear archivo .env usando `example.env` como muestra.

## INSTALACIÓN BACKEND

* Ubicado en la raiz del proyecto ejecutar: `npm install`
* Crear archivo .env en la raiz del proyecto copiando el contenido de `example.env`

## INSTALACIÓN FRONTEND

Ubicado en la carpeta: `/client` ejecutar : `npm install`

# EJECUTAR APLICACIÓN EN DESARROLLO
## BACKEND
  En la raíz del proyecto ejecutar `npm run start-dev` y la aplicacion backend correrá en http://localhost:5000

## FRONTEND

  En la carpeta `/client` del proyecto ejecutar `npm run start` y la aplicacion front-end correrá en http://localhost:3000 y se comunicará con el servidor node.js pero debe iniciarse primero la aplicación backend.

# Despliegue en producción

* Para preparar el frontend para producción, en la carpeta `/client` del proyecto ejecutar `npm run build`. Esto hará que el front-end esté en la carpeta build del servidor.
* En vez de usar archivo .env pueden configurarse las variables de entorno en el sistema operativo del servidor o en la nube.
* Iniciar servidor en producción ubicándose en la raíz del proyecto y ejecutando: `npm run start` la aplicación en su totalidad podrá accederse en: http://localhost:5000

# Dependencias
## Backend
    * axios (Para peticiones XHR en el servidor. Hay muchas otras alternativas, incluyendo la nativa)
    * dotenv (Para simplificar las variables de entorno)
    * express (Servidor web y de APIs)
## Frontend
    * axios (Para peticiones XHR en el cliente. Hay muchas otras alternativas, incluyendo la nativa fetch)
    * react-query (Para simplificación de los estados de las peticiones XHR, manejo de caché etc.)
    * react-router-dom (Enrutador en el cliente)
    * react-scripts (Create React APP)
    * sass (Preprocesador de estilos que permite también la sintaxis SCSS)
    * typescript (Lenguaje popular que permite añadir tipos estáticos a javascript y otras restricciones)

# Estructura de folders y entidades de arquitectura

## Backend

* Constants: constantes
* Parsers: Transformadores de la estructura de las API de Mercado Libre a la estructura solicitada para el front.
* Routes: Rutas backend
* Services: Servicios con peticiones a las API e Mercado Libre
* Utils: Utilidades de archivos

📦src
 ┣ 📂constants (constantes)
 ┃ ┗ 📜apiUrls.js
 ┣ 📂parsers (Transformadores de la estructura de las API de Mercado Libre a la estructura solicitada para el front)
 ┃ ┗ 📜itemParsers.js
 ┣ 📂routes (Rutas backend)
 ┃ ┗ 📜itemRoutes.js
 ┣ 📂services (Servicios con peticiones a las API e Mercado Libre)
 ┃ ┗ 📜itemsServices.js
 ┗ 📂utils (Utilidades y funciones)
 ┃ ┗ 📜responses.js

 ## Frontend

* Layouts: Posibles layouts de la aplicación. En esta se usa uno sólo
* Pages: Páginas de la aplicación (SearchResults e ItemDetail)
* Services: Peticiones al servidor (Para búsquedas y detalles de ítems)
* Style: Base y estilos comunes usando SASS con la sintaxis SCSS.
* Public/assets/images: Imágenes a usar en la aplicación incluyendo retina.


 📦src
 ┣ 📂components (componentes front)
 ┃ ┣ 📂Breadcrumbs
 ┃ ┃ ┣ 📜Breadcrumbs.module.scss
 ┃ ┃ ┗ 📜Breadcrumbs.tsx
 ┃ ┣ 📂CommonHeader
 ┃ ┃ ┣ 📜CommonHeader.css
 ┃ ┃ ┗ 📜CommonHeader.tsx
 ┃ ┗ 📂SearchBar
 ┃ ┃ ┣ 📜SearchBar.module.scss
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┣ 📂layouts (Posibles layouts de la aplicación. En esta se usa uno sólo)
 ┃ ┣ 📜StandardLayout.scss
 ┃ ┗ 📜StandardLayout.tsx
 ┣ 📂pages (Páginas de la aplicación, SearchResults e ItemDetail)
 ┃ ┣ 📂ItemDetailPage
 ┃ ┃ ┣ 📜ItemDetailPage.module.scss
 ┃ ┃ ┗ 📜ItemDetailPage.tsx
 ┃ ┗ 📂SearchResultsPage
 ┃ ┃ ┣ 📜SearchResultsPage.module.scss
 ┃ ┃ ┗ 📜SearchResultsPage.tsx
 ┣ 📂services (Peticiones al servidor para búsquedas y detalles de ítems)
 ┃ ┣ 📜fetchItemDetails.ts
 ┃ ┗ 📜fetchSearchResults.ts
 ┣ 📂styles (Base y estilos comunes usando SASS con la sintaxis SCSS)
 ┃ ┣ 📂abstracts
 ┃ ┃ ┣ 📜_mixins.scss
 ┃ ┃ ┗ 📜_variables.scss
 ┃ ┣ 📂base
 ┃ ┃ ┗ 📜_base.scss
 ┃ ┗ 📜main.scss
 ┣ 📜App.scss
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
 📦public
 ┣ 📂assets
 ┃ ┗ 📂images (Imágenes a usar en la aplicación incluyendo retina)
 ┃ ┃ ┣ 📜ic_Search.png
 ┃ ┃ ┣ 📜ic_Search@2x.png
 ┃ ┃ ┣ 📜ic_shipping.png
 ┃ ┃ ┣ 📜ic_shipping@2x.png
 ┃ ┃ ┣ 📜Logo_ML.png
 ┃ ┃ ┗ 📜Logo_ML@2x.png
 ┣ 📜favicon.svg
 ┣ 📜index.html
 ┣ 📜manifest.json
 ┗ 📜robots.txt

# CSS and Styles
* Sass fue usado por recomendacion en los requisitos. No se utilizan todas las funcionalidades por el tamaño del proyecto.

# CSS framework
Por el pequeño tamaño del proyecto, no se usaron frameworks CSS tipo Bootstrap, Material Design, Ant, Foundation.

# Responsive Design
La mayoría de las vistas funcionaría bien equipos de bajas resoluciones aun sin breakpoint por las ventajas de flex y grid, se dejó la posibilidad de usar breakpoints en el componente StandardLayout.

# Siguientes pasos

Si el proyecto tuviera un alcance mayor se podrían trabajar en las siguientes áreas:
* Refinamiento de estilos
* Definición de tipos más precisos en typescript para ciertos objectos, usando interface o type.
* Pruebas extensivas en back y front:
  * Unit test
  * Integration tests
  * e2e tests
* Reforzamiento de  accesibilidad (a11y), para facilitar navegación desde dispositivos como screen readers.
* Unit test de accesibilidad (a11y).
* Refactor SCSS y Typescript.
* Implementar Storybook o una herramienta similar para las librerías de componentes front.

# Browsers usados:
* Chrome
* Firefox
* Edge
* Brave

# Agradecimientos

Estuvo divertido el ejercicio. ¡Gracias!

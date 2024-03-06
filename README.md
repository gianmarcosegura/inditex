# Caracteristicas de la prueba:

- React 18.2
- Node 20.11
- Axios para la llamadas a las APIs
- EsLint como Linter
- Prettier como Formatter
- Los estilos he utilizado CSS basados en FlexBox
- ContextAPI como control del estado de los personajes favoritos
- La App es responsive tanto para móviles, tablets o escritorio
- No se ha utilizado ninguna librería externa de componentes ni de estilos
- La App está desplegada en [GithubPages](https://gianmarcosegura.github.io/inditex/)

Para crear una build de producción con el comando "npm run build" en la terminal" bastaría.
En caso de querer probarlo localmente,podeis instalar serve (npm install -g serve) y situados dentro de la carpeta build ejecutar el comando (serve -s) y entráis en el locahost que os indique serve.

Se podría cambiar la configuración como se quiera modificando en webpack dentro de react-scripts y así crear por ejemplo un script que sea para produccion (como es actualmente npm run build, pero mas personalizado) y otro para desarrollo por ejemplo deshabilitando el minimizado u otras opciones de la build.
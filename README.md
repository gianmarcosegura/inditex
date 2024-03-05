npm run build para crear los archivos para producción, en caso de querer probarlo localmente,podeis instalar serve (npm install -g serve) y situados dentro de la carpeta build ejecutar el comando (serve -s), entráis en el locahost que os indique serve y ya está

se podría cambiar la configuración como se quiera modificando el webpack dentro de react-scripts y así crear por ejemplo un script que sea para produccion (como es actualmente npm run build, pero mas personalizado) y otro para desarrollo por ejemplo deshabilitando el minimizado u otras opciones de build.

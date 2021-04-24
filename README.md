## Aplicación de Clima 

Aplicación de consola con menún interactivo, su principal funcion es optener el clima de un lugar, ciudad o pais. Se usa [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/) para obtener una lista de localidades y sus coordenadas. Se usa [Weather API](https://openweathermap.org/api) de OpenWeather para obtener el clima de la localidad seleccionada.



### Consideraciones antes de usar

1.  Tener instalado Node.js 14.15.1 o superior en su ordenador

2.  Crear una cuenta en la página de [Open Weather Map](https://openweathermap.org/api) para obtener un apikey y poder usar la api que ofrese este Sitio Web.

3.  Agregar el archivo city.list.json:
    *   Este ejemplo usa un archivo JSON que lo pueden descargar desde la documentación de uso de la página de Open Weather Map, en la sección [By city ID](https://openweathermap.org/current#cityid), o dando click [aqui](http://bulk.openweathermap.org/sample/city.list.json.gz).
    
    *   Una vez descargado el Archivo, debe descomprimirlo y luego pasar el archivo city.list.json a la carpeta /data/ del repositorio clonado, si no lo tiene debe crear la carpeta.

4.  Como es una apliccación de consola desarrollada como ejemplo del curso [Node de cero a experto](https://www.udemy.com/course/node-de-cero-a-experto/), necesariamente debe abrir la carpeta del repositorio en una terminal para usarlo.

5.  Debe de instalar los paquetes de node usando el siguiente comando.
    ```
    npm install
    ```

### Comandos de uso
*   Para optener el clima debe de ingresar el siguiente comando
    ```
    npm app --cityname {nombre de la ciudad o pais}
    o
    npm app -c {nombre de la ciudad o pais}
    ```
*   Si es la primera vez en usar la aplicación o necesita cambiar la apikey, debe de agregar la opcion --savekey seguido del Apikey de la página Open Weather Map
    ```
    npm app --savekey {Apikey} --cityname {nombre de la ciudad o pais}
    o
    npm app -s {Apikey} -c {nombre de la ciudad o pais}
    ```

    **Nota:** No importa el orden en que ingrese las opciones
    
#### Opciones:
    --version       Muestra el número de versión    [booleano]
    --cityname, -c  Nombre de la ciudad o país que se va obtener el clima   [requerido]
    --savekey, -s   Guarda el ApiKey de autorización para usar el la api del Clima Open Weather Map
    --help          Muestra ayuda   [booleano]

#### Ejemplos
    ```
    npm app --savekey 29e392191139af6aefe99e9 --cityname Ecua
    **resultado:**
    >   Api Key saved
    >   The climate of Republic of Ecuador is 20.79 ºC
    ```
    
    ```
    npm app -c Ecua 
    **resultado:**
    >   The climate of Republic of Ecuador is 20.79 ºC
    ```

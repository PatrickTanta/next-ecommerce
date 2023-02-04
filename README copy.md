# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

-   El -d, significa \__detached_

MongoDB URL Local:

```
mongodb://localhost:27017/ecommercedb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.example** a **.env**

## Llenar la base de datos

Llamar a:

```
http://localhost:3000/api/seed
```

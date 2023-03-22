# Next.js Ecommerce App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

-   El -d, significa \__detached_

## Configurar las variables de entorno

Renombrar el archivo **.env.example** a **.env**

-   MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/ecommercedb
```

-   Reconstruir los módulos de node y levantar Next

```
npm install
npm run dev
```

## Llenar la base de datos

Llamar a:

```
http://localhost:3000/api/seed
```

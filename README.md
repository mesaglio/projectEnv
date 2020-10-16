# Project - Env

La finalidad de esta api es poder mantener centralizada la informacion para levantar las distintas aplicaciones.
Fue creada para facilitar la comunicacion de las runs configurations

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7dc2e8ba886dcb14774b#?env%5B3000%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoibG9jYWxob3N0OjMwMDAiLCJlbmFibGVkIjp0cnVlfV0=)

## Para crear un proyecto
```
curl --location --request POST '{{baseUrl}}/env' \
--data-raw '{
    "settings": {
        "setting": "setting",
        "projectName": "projectName"
    }
}'
```

## Para obtener un proyecto
```
curl --location --request GET '{{baseUrl}}/env/[projectName]'
```

## Para obtener todos los proyectos
```
curl --location --request GET '{{baseUrl}}/env/'
```

## Para actualizar un proyecto
```
curl --location --request PATCH '{{baseUrl}}/env/[projectName]' \
--data-raw '{
    "settings": {
        "setting": "SQL_PORT=1433;",
        "projectName": "projectName"
    }
}'
```

## Para eliminar un proyecto
```
curl --location --request DELETE '{{baseUrl}}/env/[projectName]'
```

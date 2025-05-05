# Описание

Backend приложение для автоматической конфигурации компьютерной сборки на основании пользовательских предпочтений.

## Используемые технологии

- **TypeScript**
- **bun**
- **Node.js**
- **Nest.js**
- **docker**
- **PostgreSQL**
- **Prisma ORM**
- **redis**
- **swagger**
- **prettier/eslint**

## Запуск проекта

### Содержимое env файла

> DATABASE_URL=""  
> DB_USER=""  
> DB_PASSWORD=""  
> DB_NAME=""  
> DB_HOST=""
>
> REDIS_HOST=""  
> REDIS_PORT=""  
> REDIS_PASSWORD=""  
> REDIS_DB=""

### Установка зависимостей

```
bun install
```

### Инициализация призма

```
bun prisma generate
bun prisma db push
```

### Сборка и запуск production-версии

```
nest start
```

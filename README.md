# Описание

Backend приложение для автоматической конфигурации компьютерной сборки на основании пользовательских предпочтений.

## Используемые технологии

- **TypeScript**
- **bun**
- **Node.js**
- **Nest.js**
- **PostgreSQL**
- **Prisma ORM**
- **swagger**
- **prettier/eslint**

## Запуск проекта

### Содержимое env файла

```bash

DATABASE_URL=""
DB_USER=""
DB_PASSWORD=""
DB_NAME=""
DB_HOST=""
DB_PORT=""

REDIS_HOST=""
REDIS_PORT=""
REDIS_PASSWORD=""
REDIS_DB=""
```

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

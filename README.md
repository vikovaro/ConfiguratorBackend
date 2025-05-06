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

> DATABASE_URL=""

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

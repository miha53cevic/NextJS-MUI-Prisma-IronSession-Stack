# NextJS + MUI + Prisma + Iron-Session Stack Template
Includes: 
- [NextJS-API-Decorators](https://next-api-decorators.vercel.app/) for easier API creation
- [SWR](https://swr.vercel.app/) for data fetching
- [axios](https://www.npmjs.com/package/axios) instead of fetch calls for post and other 
- [react-hook-form](https://react-hook-form.com/) for building forms

## Setup
Download [Postgres](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
Default user is postgres and default db is postgres with user defined master password, remember these!

Open [.env](./.env) and fill out the missing parts.  
```[user]:[password]@localhost:5432/[dbName]?schema=[schemaName]```

```bash
npm i
npm run prisma-migration-dev
```
Input migration name ex. init

```bash
npm run dev
```

Open http://localhost:3000/
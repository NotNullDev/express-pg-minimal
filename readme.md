# query builder with prisma schema gen:
https://github.com/kysely-org/kysely#installation

```bash
# minimal express ts-setup guide:
npm install --global ts-node
npx typescript init
npm init -y
pnpm install --save-dev @types/node
touch index.ts

# replace index.js in package.json with index.ts

ts-node . # to start app
```

```bash
# to push data to db and generate types to db/types.ts
prisma db push
prisma generate
```

```bash
# start project
ts-node .
# or
npx ts-node .
```
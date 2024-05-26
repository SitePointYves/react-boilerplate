This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Client

# 0.0.4

- debugger
- Dynamic route /mitarbeiter/1
- Redux and Saga

# 0.0.3

- i18n
- Rest anbindung
- Sonarqube
- dockerize sonarqube

# v0.0.2

- Next Routes
- e2e test cyress
- Electron

# v0.0.1

- Starter

# TODO

- MUI5 vs PrimeREact
- MUI Icons
- Test with react-testing-library und jest und cypress
- dockerize/podman - cypress, electron
- "prop-types"

# sinnvoll ?

"formik" vs "React-hook-form"

"rxjs": => However, if your application has complex state management needs, or if you're dealing with multiple asynchronous data streams that need to be coordinated, RxJS could be a useful addition. It's all about choosing the right tool for your specific needs.

"cross-env": oder nextjs env?
"@babel" => abwärts kompatibilität

renovate bot
graphQl
GRPC
Webpack => in nextjs included already
vitest

# Later

- validation example
- Permissions example
- Electron autoUpdater

# Sonarqube

Run Sonarqube:
docker-compose -f podman-compose-sonarqube.yml up
http://localhost:9000/
user:admin
pwd:luckyhappy

# UI in Docker

docker-compose -f podman-compose-ui.yml up

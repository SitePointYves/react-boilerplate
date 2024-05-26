This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Client

# 0.0.6

- React-hook-form + validation
- utils

# 0.0.5

- MUI5 vs PrimeREact
- MUI Icons
- env

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

- create udn update auslagern ? /edit/1 => create route
- mui templates
- Test with react-testing-library und jest und cypress
- dockerize/podman - cypress, electron
- "prop-types"

# sinnvoll ?

"rxjs": => However, if your application has complex state management needs, or if you're dealing with multiple asynchronous data streams that need to be coordinated, RxJS could be a useful addition. It's all about choosing the right tool for your specific needs.

renovate bot => nur über actions
graphQl
GRPC
vitest

# Later

- Permissions example / login
- Electron autoUpdater

# Already inside

Webpack
babel

# Sonarqube

Run Sonarqube:
docker-compose -f podman-compose-sonarqube.yml up
http://localhost:9000/
user:admin
pwd:luckyhappy

# UI in Docker

docker-compose -f podman-compose-ui.yml up

# REACT

## useEffect

useEffect: Dieser Hook wird verwendet, um Nebeneffekte in Funktionskomponenten auszuführen. Nebeneffekte könnten das Abrufen von Daten, Abonnements oder manuelle Änderungen am DOM sein. Sie verwenden useEffect, wenn Sie nach dem Rendern der Komponente etwas Code ausführen möchten. Dieser Code kann nach jedem Rendern ausgeführt werden oder nur, wenn sich bestimmte Werte geändert haben.

useEffect(() => {
// Daten abrufen oder einen anderen Nebeneffekt hier ausführen
}, [abhaengigkeit1, abhaengigkeit2]); // Ausführen nach jedem Rendern, bei dem sich abhaengigkeit1 oder abhaengigkeit2 geändert hat

## useCallback

useCallback: Dieser Hook wird verwendet, um Funktionen zu memoisieren. Wenn Sie eine Funktion haben, die als Prop an Kindkomponenten weitergegeben wird und diese Funktion sich nicht ändert, es sei denn, bestimmte Werte ändern sich, können Sie useCallback verwenden, um unnötige Neu-Renderings der Kindkomponenten zu vermeiden.

const memoisierteCallback = useCallback(() => {
macheEtwas(a, b);
}, [a, b]); // Die Funktion nur neu erstellen, wenn sich a oder b ändert

## useMemo

useMemo: Dieser Hook wird verwendet, um aufwändige Berechnungen zu memoisieren. Wenn Sie eine rechenintensive Funktion haben, die einen Wert zurückgibt und dieser Wert sich nur ändert, wenn sich bestimmte Werte ändern, können Sie useMemo verwenden, um unnötige Berechnungen zu vermeiden.

const memoisierterWert = useMemo(() => berechneAufwaendigenWert(a, b), [a, b]); // Nur neu berechnen, wenn sich a oder b ändert

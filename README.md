This is an example of a Next.js React App that has been dockerized which requires api keys to run.

## Installation and running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building the Docker image

```
docker build -t car_showcase .
```

## Running the Docker image

```
docker run -d --rm -p 3000:3000 car_showcase
```

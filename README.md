<img width="1639" alt="background" src="https://github.com/alexCoding42/car_showcase/assets/56698920/22ce3878-29cc-4c31-b073-ffa5ab2f9d3f">

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

## Use Docker

Two different methods you can:

### 1. Clone the repository first and then build and running the image

#### Building the Docker image

```
docker image build --build-arg NEXT_PUBLIC_RAPID_API_KEY='your_rapid_api_key' --build-arg NEXT_PUBLIC_IMAGIN_API_KEY='your_imagin_api_key' -t car_showcase .
```

#### Running the Docker image

```
docker run -d --rm -p 3000:3000 --name car_showcase car_showcase
```

> The --rm argument is to delete the container when you stop the container, you can remove it if you want

### 2. Directly pull the image from Docker Hub, no need to clone the repository

#### Pull from Docker Hub and run the Docker image

```
docker run -e NEXT_PUBLIC_RAPID_API_KEY='your_rapid_api_key' -e NEXT_PUBLIC_IMAGIN_API_KEY='your_imagin_api_key' -d --rm -p 3000:3000 --name car_showcase alexcoding2065/car_showcase
```

> The --rm argument is to delete the container when you stop the container, you can remove it if you want

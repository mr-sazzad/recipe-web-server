# Recipe Web Server

The Recipe Web Server project was developed to create and manage food recipes. Users can create new food recipes, modify existing recipes, and delete any recipe.

## Setup Instructions

To run this web app, follow these instructions:

1. Create a `.env` file with the following environment variables:

DATABASE_URL="postgresql://username:password@localhost:5432/database?schema=public" PORT=<your_port_number>

2. Ensure you have Node.js installed with the following version:
Node Version: v20.9.0

## Docker Image

https://hub.docker.com/r/sazzadkarim/recipe-web-server

## Deployed Server

Root URL for the deployed server:

ROOT_URL = https://recipe-web-server-xi.vercel.app/api/v1

## API Endpoints

### Recipes

- `POST: /recipes/create-new-recipe`
- `GET: /recipes`
- `GET: /recipes/single-recipe/:id`
- `PATCH: /recipes/update-single-recipe/:id`
- `DELETE: /recipes/delete-single-recipe/:id`

### Comments

- `POST: /comments/create-new-comment`
- `GET: /comments`

### Feedback

- `POST: /feedbacks/create-feedback`
- `GET: /feedbacks`

---

We hope you find this web server useful for managing your food recipes!

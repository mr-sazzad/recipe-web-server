# Recipe Web Server

this project was developed to create food recipes
user can create new food recipes also modify existing recipes
also they able to delete any recipe

`you have to follow this instruction to run this web app`
```
.env file
DATABASE_URL="postgresql://username:password@localhost:5432/database?schema=public"
PORT
```

```
Node Version
v20.9.0
```

Root Url for deployed server

`ROOT_URL = https://recipe-web-server-xi.vercel.app/api/v1`

All URLs For Recipes

`POST: /recipes/create-new-recipe`

`GET: /recipes`

`GET: /recipes/single-recipe/:id`

`PATCH: /recipes/update-single-recipe/:id`

`DELETE: /recipes/delete-single-recipe/:id`


All URLs for Comments

`POST: /comments/create-new-comment`

`GET: /comments`


All URLs for feedback

`POST: /feedbacks/create-feedback`

`GET: /feedbacks`


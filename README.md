# practice-node-pg

This is the code written while roughly following [Glaucia Lemos'](https://dev.to/glaucia86) [Developing a CRUD Node.js Application with PostgreSQL](https://dev.to/glaucia86/developing-a-crud-node-js-application-with-postgresql-4c9o) tutorial.

Technologies used:

* [node-postgres](https://github.com/brianc/node-postgres): 8.7.1
* postgresql: 14.1
* node: 17.4.0
* npm: 8.3.1

---

## Set up

**This set up assumes you have psql installed on your machine with a postgres database.**

Run the following Makefile command to set up the database and install the application: `make system`

Then run the following npm command to start up the development server: `npm run dev`

Feel free to take a look at the [Makefile](./Makefile) to understand the set up process or debug any issues you might have.

---

## Api Requests

GET `/`

```bash
curl --request GET \
  --url http://localhost:3000/
```

GET `/products`

```bash
curl --request GET \
  --url http://localhost:3000/products
```

GET `/products/:id`

```bash
curl --request GET \
  --url http://localhost:3000/products/1
```

POST `/products`

```bash
curl --request POST \
  --url http://localhost:3000/products \
  --header 'Content-Type: application/json' \
  --data '{
	"product_name": "Nintendo Switch",
	"quantity": 2,
	"price": "299.99"
}'
```

PUT `/products/:id`

```bash
curl --request PUT \
  --url http://localhost:3000/products/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"product_name": "Playstation 5",
	"quantity": 4,
	"price": "499.99"
}'
```

DELETE `/products/:id`

```bash
curl --request DELETE \
  --url http://localhost:3000/products/1
```

**If you're using the [insomnia rest client](https://insomnia.rest), be sure to import the [insomnia project](./docs/practice-node-pg_2022-01-22.json).**


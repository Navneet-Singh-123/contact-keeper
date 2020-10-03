## Contact Keeper

Full stack MERN contact manager with React hooks, context & JWT authentication.

The database that's being used is mongoDB Atlas. It has basically two schemas, one for the users and for each of those user there is a schema for his/her contact. 

Express is being used as the web application framework. This is really easy to configure and customise.
There are various other alternatives available for express like Koa and Hapi but in my opinion express has an edge over these frameworks.
It is fully customizable along with quite fast development. Almost standard for Node js applications.

On the Front End side React js is being used which is quite flexible due to its component based structure.

## Usage

Install dependencies

```bash
npm install
npm client-install
```

## Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
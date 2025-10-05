📘 README.md

# My DB API

A simple Node.js module to interact with your modular JSON database API.

## Installation
```bash
npm install my-db-api

Usage

import { add, read } from "my-db-api";

// Add data
await add({
  db: "user",
  password: "YOUR_DB_PASSWORD",
  key: "users.001",
  value: { name: "John Doe", age: 30 }
});

// Read specific key
const user = await read({
  db: "user",
  password: "YOUR_DB_PASSWORD",
  key: "users.001"
});

// Read entire database
const allUsers = await read({
  db: "user",
  password: "YOUR_DB_PASSWORD"
});
```

License

MIT

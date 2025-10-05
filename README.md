📘 README.md

# My Vorbase

Module Add base atau control database di Vorbase 

## Installation
```bash
npm install vorbase

Usage

import { add, read } from "vorbase";

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

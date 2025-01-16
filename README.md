# Learning Node.js

Welcome to the Node.js learning repository! This guide will help you understand the basics of Node.js, its modules, and how to get started with building scalable and efficient server-side applications.

---

## Table of Contents
- [What is Node.js?](#what-is-nodejs)
- [Why Learn Node.js?](#why-learn-nodejs)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installing Node.js](#installing-nodejs)
  - [Running Your First Script](#running-your-first-script)
- [Core Concepts](#core-concepts)
  - [Modules in Node.js](#modules-in-nodejs)
  - [The Event Loop](#the-event-loop)
- [Building a Simple HTTP Server](#building-a-simple-http-server)
- [Learning Resources](#learning-resources)

---

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript code on the server side to build fast, scalable, and efficient applications.

### Key Features:
- **Asynchronous and Event-Driven**: Handles multiple operations efficiently.
- **Single-Threaded**: Uses an event loop to manage concurrent requests.
- **NPM Ecosystem**: Includes a vast collection of libraries and tools.

---

## Why Learn Node.js?

Node.js is widely used for:
- Building **real-time web applications** (e.g., chat apps, live streaming).
- Creating RESTful APIs and backends for web applications.
- Developing scalable microservices.
- Full-stack development with frameworks like **Express.js**.

---

## Prerequisites

Before learning Node.js, you should have:
- Basic knowledge of **JavaScript**.
- Familiarity with web development concepts (HTML, CSS, HTTP).
- A code editor (e.g., **Visual Studio Code**).

---

## Getting Started

### Installing Node.js

1. Download Node.js from the [official website](https://nodejs.org/).
2. Install Node.js by following the instructions for your operating system.
3. Verify the installation:
   ```bash
   node -v
   npm -v
   ```

### Running Your First Script

1. Create a file named `app.js`:
   ```javascript
   console.log("Hello, Node.js!");
   ```
2. Run the script in the terminal:
   ```bash
   node app.js
   ```

---

## Core Concepts

### Modules in Node.js

Modules are reusable pieces of code. Node.js includes **core modules**, **local modules**, and **third-party modules**.

#### Example of a Core Module:
```javascript
const os = require('os');
console.log(`Your system uptime is ${os.uptime()} seconds.`);
```

### The Event Loop

The event loop allows Node.js to handle asynchronous operations. It processes tasks like I/O operations, timers, and callbacks.

---

## Building a Simple HTTP Server

Create a basic HTTP server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
```

Run the server:
```bash
node server.js
```
Open `http://localhost:3000/` in your browser to see the output.

---

## Learning Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Learn Node.js - W3Schools](https://www.w3schools.com/nodejs/)
- [The Net Ninja - Node.js Tutorials](https://www.youtube.com/@NetNinja)
- [Node.js Design Patterns Book](https://www.nodejsdesignpatterns.com/)

---

Happy learning! 🎉

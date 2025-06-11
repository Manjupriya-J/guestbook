
# 📖 Guest Book 

A simple and elegant **Guest Book** web application built using **HTML, CSS, JavaScript (Fetch API)** .

Visitors can leave their name and message, which gets displayed on the page — giving the classic guest book a digital twist!

---

## 🌟 Features

- 💬 Add guest messages dynamically
- 📡 Uses `Fetch API` for sending & retrieving data
- 🧠 Modern, minimal UI
- 💾 Optionally stores data on localStorage or REST API

---

## 🛠️ Tech Stack

| Tech       | Used For                  |
|------------|---------------------------|
| HTML/CSS   | Structure and styling     |
| JavaScript | DOM manipulation & logic  |
| Fetch API  | Sending/receiving messages |
| (Optional) JSON Server / Express.js | Backend simulation |

---

## 🚀 How to Run Locally

### 🔧 Option 1: Frontend Only (no backend)

1. Clone the repo:
    ```bash
    git clone https://github.com/your-username/guestbook.git
    cd guestbook
    ```

2. Open `index.html` in your browser.

> ✅ Note: In this version, messages will not persist unless using localStorage.

---

### 🌐 Option 2: With JSON Server (local API)

1. Install JSON server globally if not already:
    ```bash
    npm install -g json-server
    ```

2. Start server:
    ```bash
    json-server --watch db.json --port 3000
    ```

3. Open `index.html` and enjoy dynamic API-based messaging!

---

## 📄 Sample Code Snippet (Fetch API POST)

```js
fetch('http://localhost:3000/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Alice',
    message: 'Hello from the frontend!'
  })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));


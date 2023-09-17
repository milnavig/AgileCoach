# AgileCoach

## How to install

### Frontend

```
cd frontend
npm i
npm start
```

### Backend

```
cd backend
npm i
npm start
```

:warning: Change OPENAI_API_KEY and database configs to yours in .env file

:warning: When you go to the page, a session identifier is generated and saved in cookies. This identifier is passed to the server and it, in turn, retrieves the chat history from the database.
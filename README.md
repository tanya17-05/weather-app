# simple-weather-app

*enter name of cities seprated by comma*

Execute the following steps to run the application:

  1. Open new terminal
  2. Set up env files as per `.env.template`

  - to make sure that the app understand which env file you are using, rename your in-use env file as `config.env` or perform changes in `backend/index.js`
  - change line `dotenv.config({path:"./config.env"})` to `dotenv.config({path:"./<Your env file name>.env"})`


  3. Go to project folder
  4. Execute the following commands
  ```bash
  cd ./backend
  ```
  ```bash
  npm i
  ```
  ```
  npm run dev
  ```

  5. Now server is running, to start the application open new terminal (without closing the previous one)
  6. Execute the following commands
  ```
  cd ./frontend
  ```
  ```bash
  npm i
  ```
  ```
  npm start
  ```




# Dependencies, and Scripts
This project was developed in Visual Studio Code.

## Available Scripts
In the project directory, you can run:

### `npm install`
Install all necessary dependencies for the project. This must be ran before running `npm start`.

### `npm start`
`npm start` **must be ran** in order for the project to work.
The endpoint /tvshows was created to have the frontend call data from.
Open [http://localhost:5000/tvshows](http://localhost:5000/tvshows) to view it in the browser.

### `npm test`
Uses jest to test all available test cases.<br />

## Dependencies
### express
I chose **Express** because it is a widely used framework for node.js that makes developing websites, and API's much easier. I heavily referred to Express's [official documentation](https://expressjs.com/) for developing my code.

### axios
I used **axios** to make the call to the API I chose for this challenge. It was chosen because it is widely used, supported, and had good [documentation](https://www.npmjs.com/package/axios) on both making the request as well as how to test using jest.

### body-parser
I used **body-parser** to parse incoming request bodies.  I referred to [official documentation](https://www.npmjs.com/package/body-parser) on how to use it.

### jest
I used **jest** as a means to create test to ensure certain services and functions were working as expected. I referred to the [official documentation](https://jestjs.io/docs/en/getting-started) for setup and getting started information, including the following code examples provided by the documentation: 
 - [Async Example](https://jestjs.io/docs/en/tutorial-async)

### supertest
I used **supertest** as a compliment to **jest** in order to test that the server properly setup the tvshows endpoint for the front end to get data from. 

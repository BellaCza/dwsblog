# DWS Blog

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.

## To run the tests // Not working properly
Run `npm run test`.

## Features
- Blog list view.
- Blog detail view.
- Responsive design.
- State management on fetch API (posts list and post details).
- Filter (layout only).
- Sort (layout only).
- Search (layout only).

## Tech Stack
- Vite
- React
- Sass
- Router dom library
- Context API
- Jest

## Dev notes
- Generic SVG used for icons (in a real environment it would be best to create a font with all the icons of the project).
- Sort function in theory correctly sorts the fetched items from the API by creating data but all posts have the same data, so it could not be verified.
- The sort component was tricky to do. If I had more time to spend on it, I would probably make it different.
- I could not figure out how to do Jest work with Vite on time, so the tests are not working.
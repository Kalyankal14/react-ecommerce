# To Create a react project
`npx create-react-app ecommerce`

## Get Present Working Directory
`pwd`

## Navigate (change directory) to react project folder (ecommerce)
`cd ecommerce`

## Start React project (Same has Replit RUN)
`npm run start`

## Stop React project server (basically stop terminal process)
`CTRL + C`

## Project Features
- Products Listing 
- Product Details
- Shopping Cart
- Checkout
- User Authentication 
- Order History
- Search and Filter


### React Snippet
`rfc` - React Functional Component
`rcc` - React Class Component


### TailwindCSS Installation
- `npm install -D tailwindcss`
- `npx tailwindcss init`
- Update `tailwind.config.js`
    - `content: ['./src/**/*.js']
- Include @tailwind in index.css
    - ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    

## Committing Changes to GITHUB Origin (remote)
1. Move changed files to Staging Area
    ```git add .```
    
    ```git add <FILENAME_WITH_FULLPATH>```
2. Commit with Message
    ```git commit -m "COMMIT MESSAGE"```
3. Publish the changes to ORIGIN (remote)
    ```git push```
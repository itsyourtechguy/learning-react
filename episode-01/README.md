💡 What is Emmet? 

Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full-fledged boiler plate code for writing HTML and CSS. 

    ✨ Example: Type ul>li*3 and press Tab → Boom! You get a list with 3 items! 
 
🧩 Difference between a Library and Framework? 

A key difference between the two is Inversion of Control. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires. 

    🤔 Think of it like this:   

        Library = You're the chef. You decide when to use the blender (library).  
        Framework = The kitchen comes with rules. You follow its layout and plug in your recipes where it tells you.
 
🌐 What is CDN? Why do we use it? 

A CDN (Content Delivery Network) is a network of distributed servers that deliver web content (like images, stylesheets, JavaScript files) to users based on their geographic location. 
Why use a CDN? 

    ⚡ Faster loading — Serves files from a server closest to the user.
    🔁 Reduced server load — Your server doesn’t have to handle every request.
    🛡️ Improved reliability — If one server fails, others can take over.
    📦 Caching benefits — Popular libraries (like React) may already be cached in the user’s browser from another site.
     
    🌍 Example: Including React from unpkg.com via CDN means users might not even need to download it — it’s already in their cache! 
     
🔄 Why is React known as React? 

React is a JavaScript Library. The name ‘React’ was chosen because the library was designed to allow developers to react to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. 

    💬 “You change the data → React reacts → UI updates.”
    No manual DOM updates. Just pure, smooth reactions. ⚛️ 
     
🔗 What is crossorigin in script tag? 

The crossorigin attribute in the script tag enables Cross-Origin Resource Sharing (CORS) for loading external JavaScript files from a different origin (domain, protocol, or port) than the hosting web page. This allows the browser to handle errors more gracefully and enables scripts to access resources securely across origins. 
Values: 

    crossorigin or crossorigin="anonymous" → Sends request without credentials.
    crossorigin="use-credentials" → Sends cookies and auth headers.
     
    🛑 Without crossorigin, errors in CDN-loaded scripts may appear as Script error. due to security restrictions. 
     
⚛️ What is the difference between React and ReactDOM? 

    React: The core library responsible for creating and managing components, handling JSX, and dealing with the virtual DOM. It’s the brain behind the UI logic. 

    ReactDOM: A separate package that handles DOM-specific methods and renders React components to the actual DOM in the browser. 
     
    🧱 Think of it like this: 

        React = Blueprint & design of a house.
        ReactDOM.render() = The construction crew that builds it in real life.
         
    💡 In modern React (18+), we use ReactDOM.createRoot() instead of ReactDOM.render(). 
     
🏗️ What is the difference between react.development.js and react.production.js files via CDN? 
react.development.js - For development - 🔍 Full error messages, warnings, debugging tools, slower performance
react.production.js - For production - ⚡ Optimized, minified, no warnings, faster performance

    🚨 Never use development builds in production — they’re 3x larger and can expose internal logic. 
     
    ✅ Best Practice: Use .development.js while building, .production.js when deploying. 

⏳ What are async and defer? 

These are attributes used in <script> tags to control how external JavaScript files are downloaded and executed. 
async 

    📥 Downloads the script in parallel with HTML parsing.
    ⏱️ Executes immediately once downloaded (may interrupt HTML parsing).
    🔁 Execution order not guaranteed.
     
    Best for independent scripts (e.g., analytics). 
     
defer 

    📥 Downloads in parallel with HTML parsing.
    ▶️ Executes after HTML parsing is complete, but before DOMContentLoaded.
    ✅ Scripts execute in order.
     
    Best for scripts that depend on the DOM or other scripts. 

    🎯 Rule of Thumb: 

        Use defer for scripts needed at page load.
        Use async for scripts that don’t depend on anything and don’t affect rendering.
         

     
     
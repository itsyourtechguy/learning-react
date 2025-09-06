🔧 What is a Microservice? 

A microservice is a small, independent service that does one thing well — like handling user authentication, sending emails, or managing restaurant data. 

Imagine your app is a restaurant: 

    One chef cooks appetizers 🍤
    One handles desserts 🍰
    One manages orders 📦
     

Each can be updated, scaled, or replaced without touching the others. 

    ✅ Independent, scalable, and loosely coupled. 
     

 
🏗️ What is Monolith Architecture? 

A monolith is when your entire app — UI, API, Auth, Database, SMS, everything — lives in one big codebase. 

Back to the restaurant: 

    One chef does everything: cooking, serving, cleaning, and even designing the menu.
    It works… until the restaurant gets busy. Then, chaos. 🔥 
     

    ❌ Hard to scale, tough to maintain, long deploy cycles. 
     

 
⚖️ Monolith vs Microservice – The Showdown 
All in one project
	
Split into independent services
One failure = whole app down
	
One fails? Others keep running
Easier to start
	
Harder to set up, easier to scale
Deploy everything together
	
Deploy services independently
 
 

🎯 Microservices = Scalability + Flexibility
But not always needed. Start simple. Grow smart. 
 
🎣 Why do we need a useEffect Hook? 

Because your component needs to do things after rendering — like: 

    Fetching data from an API
    Setting up subscriptions
    Manually changing the DOM
     

useEffect lets you run side effects after React updates the screen. 
jsx
useEffect(() => {
  fetch("/api/restaurants")
    .then(res => res.json())
    .then(data => setRestaurants(data));
}, []);
 
 

💡 It runs after render, not during.
🔧 The empty [] means: "Run once on mount" (like componentDidMount). 

    🚨 Without useEffect, you’d break React’s rendering flow. 
     

 
🔗 What is Optional Chaining? 

Optional chaining (?.) lets you safely access deeply nested properties without throwing errors if something is null or undefined. 

const street = user?.address?.street;
 
 

✅ If user or address is missing → returns undefined
❌ Without it → Cannot read property 'street' of undefined 

    💡 It’s like saying: “Go down this path only if it exists.” 
     

 
✨ What is Shimmer UI? 

A shimmer UI (or skeleton screen) is a loading placeholder that shows the layout before real data arrives. 

Instead of a blank screen or spinner, users see: 

🎯 Why? 

    Feels faster (perceived performance)
    Shows structure
    Reduces layout shift
     

    🍟 Pro tip: Use shimmer while your useEffect fetches data. 
     

 
💬 What is the difference between a JavaScript Expression and Statement? 
✅ Expression 

Returns a value. Can be used inside JSX. 

2 + 2                    // → 4
`Hello ${name}`          // → "Hello John"
user.isLoggedIn ? "Yes" : "No"
 
 

You can put expressions in {} in JSX: 

```<p>{user.name}</p>```
 
 
✅ Statement 

Does an action, but doesn’t return a value. 

if (x > 5) { ... }
for (let i = 0; i < 10; i++) { ... }
let x = 10;
 
    ❌ You cannot write statements directly in JSX: 
     
{ if (true) { ... } } // ❌ Invalid!
 
 

✅ But you can use expressions like ternary: 

{ isLoggedIn ? <Logout /> : <Login /> } // ✅ Perfect!
 
 
 
🎭 What is Conditional Rendering? 

Rendering different UI based on conditions. 
Example: 
```
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please sign in.</p>
      )}
    </div>
  );
}
``` 
 

Other ways: 

    && operator: {isLoggedIn && <Dashboard />}
    Early return in component
    if-else outside JSX
     

    🎯 Key idea: UI = f(state) — the UI is a function of your app’s state. 
     

 
🔐 What is CORS? 

CORS = Cross-Origin Resource Sharing 

It’s a security feature built into browsers that blocks HTTP requests to a different domain, port, or protocol unless the server says “It’s okay.” 

👉 Example: 

    Your app runs on http://localhost:3000
    You call https://api.example.com
     

Browser checks:   

    “Does api.example.com allow requests from localhost:3000?” 
     

If the server doesn’t send the right headers (Access-Control-Allow-Origin), the request is blocked. 

🔧 Fix: Server must enable CORS for your domain. 

    🛑 CORS is a browser-only rule. Node.js or Postman don’t care. 
     

 
⏳ What is async and await? 

They make working with promises cleaner and easier. 
async 

Marks a function as asynchronous — it always returns a Promise. 
await 

Pauses the function until the promise resolves. 
```
async function getRestaurants() {
  const data = await fetch("/api/restaurants");
  const json = await data.json();
  return json;
}
``` 
 

    ✅ No .then(), no nesting, just linear code. 
     

    🚨 You can only use await inside async functions. 
     

 
📥 What is the use of const json = await data.json();? 

After fetching data, you get a Response object — not the actual JSON. 

.json() is a method on the response that parses the body into a JavaScript object. 

But it returns a Promise, so you need await: 
```
const response = await fetch("/api/restaurants");
// response.body → readable stream

const json = await response.json();
// now it's a real JS object 🎉
 
 

    🔁 Think of it as: "Take the raw data and turn it into JSON I can use." 
     

 
🔄 React Render Cycles – Behind the Scenes 

When a state variable changes, React: 

    Re-renders the component
    Runs reconciliation (diffing)
    Updates only what changed in the DOM
     

    💡 This is why React is fast — it doesn’t redraw everything. 
     

 
🚀 Two Approaches to Loading Data 
1. Load → API → Render 

    Wait for API to finish
    Then show the page
    ❌ Feels slow (blank screen)
     

2. Load → Render → API → Re-render 

    Show something immediately (e.g., shimmer)
    Fetch data in background
    Update when ready
    ✅ Better UX
     

    🎯 This is what we do in React: 
     
 
 
 
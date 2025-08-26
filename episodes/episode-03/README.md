💬 What is JSX? 

JSX = JavaScript XML — a syntax that looks like HTML, but is actually JavaScript. 

    🧷 Think: HTML-like tags in your JS code.
    But it’s not HTML. And the browser can’t read it directly. 
      
🦸 Superpowers of JSX 

    Clean & readable code — write UI like HTML.
    JavaScript inside — use {} to embed variables, expressions.
    Auto-sanitization — prevents XSS attacks by escaping data.
    Better errors — React gives helpful warnings.
    No createElement() hell — goodbye, verbose code!
     
    ✨ JSX = HTML’s cool cousin who codes in JavaScript. 
     
🔌 Role of type attribute in script tag? What options? 

The type attribute tells the browser what kind of script it is. 
Common values: 

    type="text/javascript" → Default. No need to write it.
    type="module" → Enables ES6 modules (import/export).
    type="application/json" → Embed JSON data in HTML.  

    🚀 Use type="module" for modern, modular JavaScript. 
     
🔤 {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} 

    {TitleComponent} → Renders a variable or React element (not a component).
    {<TitleComponent />} → Calls and renders a React component (self-closing).
    {<TitleComponent></TitleComponent>} → Same as above, just not self-closing.
     
    ✅ Both <TitleComponent /> and <TitleComponent></TitleComponent> do the same thing.
    Pick the shorter one. 😎 
      
🛠️ What is another way of starting the build of the project? 

Instead of typing npx parcel index.html every time, use scripts in package.json. 

Add this: 
json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
 
Then run: 
npm start           # For dev server
npm run build       # For production build
 
    🎯 Pro tip: Scripts save time and keep commands consistent. 
     
❓ Is JSX valid JavaScript? 

Nope! JSX is not valid JS by itself. 
But tools like Parcel/Babel convert it into plain JavaScript (React.createElement()). 
    🔄 JSX → Transpiled → Real JS → Browser understands. 
     
🤔 If browser can’t understand JSX, how does it work? 
Because Parcel is a beast! 🐉 
Before your code hits the browser: 

    Transpilation happens (via Babel + Parcel).
    JSX turns into plain JavaScript.
    Browser gets clean, compatible code.
     
    🔄 Transpilation = Fancy word for "convert code to browser-friendly format". 
      
🆚 What’s the difference between HTML and JSX? 

    class in HTML → className in JSX
    onclick → onClick (camelCase!)
    JSX uses camelCase for all props.
    JSX must return one root element.
    You can embed JS with {} in JSX.
     
    🧱 HTML is markup. JSX is JavaScript that looks like markup. 
     
🧩 What are Components? 

Reusable UI building blocks. 
Two types: 

    Class Components → Old way (uses class). Rare now.
    Functional Components → New way (uses functions). Industry standard.
     
    ✅ Always prefer functional components. 
      
📦 What is a React Functional Component? 

A JavaScript function that returns JSX. 
jsx
 
<!-- const MyComponent = () => <h1>Namaste React!</h1>; -->
 
    ✅ Always capitalize component names.
    myComponent ❌ → MyComponent ✅ 
     
🧮 How to use JavaScript code inside JSX? 

Use curly braces {}. 
jsx
<!-- const number = 10000;
const Heading = () => (
  <div>{number}</div>
); -->
 
    💡 Works with variables, expressions, functions — but not statements (like if). 
     
🔁 How to call a React Element in JSX? 

Just wrap it in {}. 
jsx
<!-- const Title = <h1>Hello</h1>;
const App = () => <div>{Title}</div>; -->
 
    🔄 Like inserting a variable — clean and simple. 
     
✅ Advantages of JSX 

    Sanitizes data → Blocks XSS attacks.
    Readable code → Write UI fast.
    Simple & elegant → Less syntax, more power.
    Better errors → Helps you debug.
    Prevents code injection → Safer apps.
     
    🛡️ JSX is not just pretty — it’s secure too. 
     
JSX might look like magic, but it’s just smart JavaScript behind the scenes.
Is JSX mandatory for React? 
No. JSX is syntactic sugar for React.createElement(). You can write React without it, but it’s way less fun. 😅 
 
Is ES6 mandatory for React? 
No, but it’s standard. React works with ES5, but modern React uses ES6+ features like classes, destructuring, and modules. 
 
{TitleComponent} vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` 

    {TitleComponent} → renders a variable or component function (if it returns JSX)  
    {<TitleComponent/>} → renders a React component (self-closing)  
    {<TitleComponent></TitleComponent>} → same as above, explicit opening/closing tag

✅ Use the last two for components. First one depends on context. 
 
How can I write comments in JSX? 
{/* This is a comment */}
⚠️ Must wrap in {} and use /* */. 
 
What is `<React.Fragment></React.Fragment>` and `<>`? 
A lightweight wrapper to return multiple elements without a div.   

    <React.Fragment> → named version  
    <> → short syntax (React 16.2+)
    No extra DOM node! 🎉
 
What is Virtual DOM? 
A lightweight copy of the real DOM. React uses it to compare changes and update only what’s needed. 🆚 
 
What is Reconciliation in React? 
The process where React updates the DOM by comparing the new Virtual DOM with the previous one (diffing). 🔄 
 
What is React Fiber? 
Rewritten React core (from 16) for better performance, incremental rendering, and async rendering. Think: 🧠 React’s new brain. 
 
Why we need keys in React? When? 
Keys help React identify which items changed, added, or removed — especially in lists.
👉 Use keys when rendering arrays of components or elements. 
 
Can we use index as keys in React? 
Only as a last resort. ❌ Avoid if:   

    List is reorderable  
    Items can be added/removed in the middle
    Use stable IDs instead! ✅
    
What is props in React? Ways to pass? 

props = inputs to components (like function arguments).
Pass via:   
`<User name="John" age={25} isActive={true} />`

Receive in component as props.name, props.age, etc.
Or destructure: ({ name, age }) => ... 
 
What is a Config Driven UI? 
UI built from data/config (e.g., JSON), not hardcoded JSX. Makes UI dynamic and manageable from backend or CMS.
🎯 Example: Dashboard widgets defined in JSON. 
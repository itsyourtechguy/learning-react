● What is the difference between Named Export, Default Export, and * as Export? 

Let’s break it down: 
✅ Named Export 

You export a variable or function with a name.   
// utils.js
export const add = (a, b) => a + b;
export const PI = 3.14;
 
👉 Import using curly braces: 
1
import { add, PI } from './utils';
 
✔️ Multiple named exports per file
✔️ Import names must match exactly   
 
✅ Default Export 

Every module can have one default export.   

```// Button.js
const Button = () => <button>Click me</button>;
export default Button;```
 
👉 Import with any name you want: 

import MyButton from './Button'; // name doesn't matter!
 
✔️ Great for main component files
✔️ Flexible naming on import   

    💡 Tip: Most components use default export. 
     
✅ * as Export (Namespace Import) 

Import all exports from a file as a single object.   

import * as Utils from './utils';
 
Now you can use: 

Utils.add(2, 3); // → 5
Utils.PI;         // → 3.14

🎯 Perfect for utility libraries or config files with many values. 
 
● What is the importance of config.js file? 

Think of config.js as the control center of your app. 

Instead of scattering API URLs, feature flags, or theme colors across files, you centralize them: 
```// config.js
export const API_BASE_URL = "https://api.myapp.com";
export const GOOGLE_MAPS_KEY = "your-key-here";
export const THEME = {
  primary: "#3f51b5",
  secondary: "#f50057"
};
export const IS_DEV = process.env.NODE_ENV === "development";```
 
✅ Why it matters: 

    Change API endpoint once → applies everywhere
    Easy to toggle features (A/B test, dark mode)
    Team-friendly: no hunting for magic strings
    Can have config.dev.js, config.prod.js for environments
     

    🎯 Pro tip: Never hardcode values. Always config-drive them! 
 
● What are React Hooks? 

Hooks are functions that let you “hook into” React features like state, lifecycle, context, etc. — inside functional components. 

Before Hooks (React < 16.8), only class components could have: 

    State (this.state)
    Lifecycle methods (componentDidMount, etc.)
     

Now? Functional components can do it all. 🎣 
Common Hooks: 
useState - Add state
useEffect - Handle side effects (API calls, subscriptions)
useContext - Access context without nesting
useRef - Access DOM elements or persist values
useReducer - Manage complex state logic
 
    🧠 Hooks don’t work inside classes. They’re for functional components only. 
     
● Why do we need the useState Hook? 

Because functional components were stateless before Hooks. 

useState gives them the power to manage dynamic data — without writing a class. 
Example: 
```import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}```
 
🔧 useState returns: 

    Current state (count)
    Setter function (setCount) to update it 

    💡 It triggers a re-render when state changes — React updates the UI automatically. 
     
Why it’s essential: 

    Makes functional components dynamic
    Simplifies state logic
    No this, no constructor, no binding
    Clean, readable, and testable
     
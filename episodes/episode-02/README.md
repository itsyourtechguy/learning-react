📦 What is NPM?

NPM (Node Package Manager) is like the Amazon of JavaScript. It lets you download, share, and manage code packages (like React, Lodash) with a single command: npm install. 
    📦 Think: “App Store for developers.” 
     
🔨 What is Parcel/Webpack? Why do we need it? 

They’re bundlers — tools that take your modular code (JS, CSS, images), process it, and bundle it into optimized files for the browser. 
We need them because browsers don’t understand import/export, JSX, or CSS imports natively. Bundlers make modern dev possible. 
    🧱 Parcel = Zero config. Webpack = Config-heavy but powerful. 
     
🧹 What is .parcel-cache? 

A hidden folder where Parcel stores cached builds to speed up future recompiles. 
    ⚡ Like a chef prepping ingredients — next time, dinner is ready faster! 
    ✅ Safe to delete. Git should ignore it. 
     
🚀 What is npx? 

npx runs packages without installing them. It’s like renting a tool instead of buying it. 
bash 
npx parcel index.html  # Runs Parcel once, no install needed
    💡 Great for trying tools or running one-off commands. 
     
🌱 What is difference between dependencies vs devDependencies? 

    dependencies: Code needed in production (e.g., React, Lodash).
    → Your app won’t run without them. 

    devDependencies: Tools only for development (e.g., Parcel, ESLint).
    → Not needed in production. 
     
    🛠️ Example: You need a hammer to build a house (dev), but not to live in it. 
     
🌲 What is Tree Shaking? 

A fancy name for dead code elimination. It removes unused code (like unused functions) from your final bundle. 
    🪓 Shake the tree → dead leaves fall off → smaller, faster app. 
    ✅ Works best with import/export syntax. 
     
🔥 What is Hot Module Replacement (HMR)? 

HMR updates your app in real-time without refreshing the page. Change CSS or JS? See it instantly. 
    💥 Like magic. But real. (And super productive.) 
    🎯 Parcel & Webpack both support it out of the box. 
 
🦸‍♂️ List down your favourite 5 superpowers of Parcel and describe any 3 in your own words. 

My Top 5 Parcel Superpowers: 
    Zero config 🎉  
    Built-in dev server 🖥️  
    Hot Module Replacement 🔥  
    Automatic code minification 🧼  
    Caching for faster builds ⚡
Described: 
    Zero config: Just run npx parcel index.html — no setup, no config files. Done.
    Hot Module Replacement: Edit code → see changes instantly. No reload, no lost state.
    Caching: Parcel remembers what it already built. Restart? It’s faster the second time.
    🦸‍♀️ Parcel: The superhero that just gets things done. 
     
🚫 What is .gitignore? What should we add and not add? 

.gitignore tells Git which files NOT to track. 
✅ Add: 
    node_modules/
    .parcel-cache/
    dist/
    .env (secrets!)
    package-lock.json? ❌ No — actually commit it!
❌ Never add: 
    Source code
    Config files needed for the app to run
    package.json — that’s essential!
    
    🧽 Keep the junk out. Git should be clean and lean. 
 
📄 What is the difference between package.json and package-lock.json? 

    package.json: Lists your project’s dependencies (with flexible versions like ^1.2.0).
    package-lock.json: Locks exact versions installed so everyone gets the same code.
    🔐 Think: package.json = “I want coffee.”
    package-lock.json = “I want Starbucks, medium, no sugar, Tuesday brew.” 
     
🛑 Why should I not modify package-lock.json? 

Because it’s auto-generated. Manual edits can break dependency trees or cause mismatches. 
    🤖 Let npm handle it with npm install.
    Editing it = playing Jenga with your project stability. 
     
📁 What is node_modules? Is it a good idea to push that on git? 

node_modules is where all your npm packages live. Thousands of files. Hundreds of MB. 
    🚫 Never push it to Git!
    It’s heavy, messy, and others can recreate it with npm install. 
    ✅ Add it to .gitignore. Trust us. 
     
📂 What is the dist folder? 

Short for "distribution" — it contains the final, optimized, bundled files ready for production. 
    🚀 Deploy this folder to your website host.
    Built by Parcel/Webpack. Not meant for editing. 
     
🌍 What is browserslist? 

A config that tells tools (like Babel, PostCSS) which browsers your app supports. 
Example: 
json
"browserslist": [
  ">0.5%",
  "not dead"
]
    🎯 Ensures your code works on the right browsers — no wasted polyfills! 
 
🔍 Vite, Webpack, Parcel 

    Vite: Blazing fast, uses native ES modules. Best for modern browsers.
    Webpack: Powerful, highly configurable. Industry standard (but slower setup).
    Parcel: Zero config, instant start. Perfect for beginners and quick projects.
    🏁 Pick:   
        Speed & simplicity → Parcel/Vite  
        Control & scale → Webpack
 
🔢 ^ (caret) and ~ (tilde) 

    ^1.2.3 → Allows updates to minor & patch versions (1.x.x)
    ~1.2.3 → Only allows patch updates (1.2.x)
    📈 Example:   
        ^1.2.3 → can upgrade to 1.5.0  
        ~1.2.3 → only up to 1.2.9
    🔒 Use ~ for stricter control, ^ for flexibility. 
     
📜 Script types in HTML (MDN Docs) 

Use type="module" to enable ES6 modules in the browser: 
html
<script type="module" src="app.js"></script>
    Supports import/export
    Runs in strict mode
    Async by default
    Can’t access localStorage in some local file setups
    🧩 Modern web apps run on modules.
     
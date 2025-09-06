Monolith archietecture
API, UI, AUTH, DB, SMS
evrything in sam project

Micro services
Different services combine together to form a big app.
Backend sevice, UI, Auth, DB, SMS, Email
separate projects
separation of concern
single responsibility principle
different services run on different ports 

Approaches
1 -> Loads -> API (500 ms) -> Render
2 -> Loads -> Render -> API -> Render
Better UX
React render cycles are really fast.

useEffect is called once the render cycle is finished.

shimmer UI

whenever state variable changes, the component re-renders. React triggers a reconciliation cycle / re-renders the component.
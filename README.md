#### want to try out the project in your local envirment ?

step 1 : clone the project from Repo
step 2 : open the project in VS code
step 3 : open the VScode terminal 
step 4 : npm i (install all modules)
step 5 : npm start (to start the local server)
step 6 : go to the link what shows in your VScode terminal

thank You so much

## HungryHive

### Features
- Header
  - Location based Search
  - Cart Items
- Home
    - Online/offline feature
    - Restaurant Search Bar
    - Filters of restaurant
  - List of Restaurants
    - Restaurant's Menu
        - accordian collaspeable feature
        - Add to the Cart


### Tech cover in this Project

**Swiggy's API** - Swiggy's realtime data from their API(only for education purpose)

**Tailwind CSS** - it's a CSS framework to give our app style and design

**Redux-toolkit** - redux for state management

**git & github** - Git is a version control system software & GitHub is service where we store our Source Code of our project

**NPM** - Npm is a package manager who help us to install the packages to our project

**React** - React is a Javascript library for Frontend Web

**Parcel** - Parcel is an open-source bundler. bundler take cares lots of behind the scences for Example
- Dev Build
- Create Local server
- HMR = Hot module replacement
- File Watching Algorithem
- Faster builds using caching
- bundling
- Minification
- Code spliting
- Diagnostics - Beautifull error showing
- And a lot more


**JSX** - jsx is a html like Javascirpt syntax where we write HTML and Javascript together. JSx also take care of injection Attacters/malicous attacters. it prevent cross site scripting

#### React concept

**Functional based components** - i used latest version for creating component in react

**Shimmer UI** - it's fake data loading UI .it shows when data is being fetch from server. To give user's a smooth experience.

**Option chaning** - work with deaply nested objects much easier. it check the data if it is comes null or undefine. it restric the app crass

**React.lazy** - a component or a part of code loaded when it's required. it also refer a code spliting or dynamic Loading

**React-router** -it's a librabry for routing. it enables the navigantion amoung various components. it's client side routing

**Higher order component** - here we pass a component inside another component. we are resuing the component to make a new component out of it.

#### React hooks

**useState** - it is a state variable . when we update the state variable react automatically re-render the Component.

**useEffect** - it takes a callback function and a dependency array. useEffect calls once after components loads. In dependency array we add State variable whenever State variable changes again useEffect calls.

**Context** - it's like a global state where we store our data in a single place . and access them from anywhere in our project

**useContext** - it's a hook to access context data

**useSelector** - it help us to subcribe to our REDUX store and fetch the data from their

**CustomHooks** - These are reuseable javascript function . we perfrom somthing then return somthing to reuse



In this project we followed single responsiblity principle that means each components is a different function according to this principle each component should have signle responsiblity. Advantage of follow single responsiblity - reussalbity, maintanable and testable

###### How i load my app UI?

*Loads* -> *Render*(Fake UI)  -> *Api call* ->  *Render*(update with original data)
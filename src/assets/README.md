1. What is JSX, and why is it used?
 Answer: JSX is a special syntax in React that lets us write HTML and JavaScript together in the same file. It makes the code easier to read and understand because it looks similar to normal HTML. React then converts the JSX into JavaScript before running it.

 2. What is the difference between State and Props?
 Answer: State is data that belongs to a component and can change over time. Props are data that we pass from one component to another, usually from parent to child. The main difference is that state is changeable, but props are read-only.
 3. What is the useState hook, and how does it work?
 Answer: The useState hook is used to add state to a functional component. It gives us a variable to store data and a function to update that data. When we update the state, React automatically re-renders the component with the new value.
4. How can you share state between components in React?
 Answer: To share state, we can move the state up to a common parent component and then pass it down as props to the child components. In bigger projects, we can also use the Context API or tools like Redux to share state easily.
5. How is event handling done in React?
 Answer: In React, we handle events by using camelCase names like onClick. We pass a function that runs when the event happens. 




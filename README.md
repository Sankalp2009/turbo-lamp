# points of Reacts

1. Always use functional approach to update an state or store data into Array or Object

-Functional Update: 
The first statement uses a functional update (oldState => [...oldState, InputData]). This ensures that the state update is based on the most recent state, which is crucial in asynchronous environments like React where state updates might be batched.

2. while passing a prop first entity would be an key which passed as an argument and second Entity which was in curly braces call in parent component
 - <Dashboard key={value(parent_part)} children={parent} />

3. 
# Form Handling using context Api and Reducer

1. Handle form handling globally using context provider.
2. Implement useReducer.
3. Handling state using dispatch and payload return Modified new Object.

# useReducer

* Syntax
const [state, dispatch] = useReducer(reducer, InitialState)

* working Principle
- It follows Redux Pattern consisting of three parts:
1. State: currentState/InitialState(state of useState).
2. Action: An Object describing what to happened.
3. Reducer: It's an Pure Function that takes (currentState, actionObject) return newObject/state.
4. dispatch: A function that sends action/ what to do in reducer(used to update_state).
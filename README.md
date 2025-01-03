# points of Reacts

1. Always use functional approach to update an state or store data into Array or Object
2. React is everything about Family Matter's (Parent-child-sibling communication)

## State 
### Functional Update: 

* The first statement uses a functional update (oldState => [...oldState, InputData]). This ensures that the state update is based on the most recent state, which is crucial in asynchronous environments like React where state updates might be batched.

## Props
* while passing a prop first entity would be an key which passed as an argument and second Entity which was in curly braces call in parent component

* Dashboard key={value(parent_part)} children={parent}

* when we pass a properties (props), we always wanted to destructure it in other component.

* Ex: const List = ({props or name of props}) =>{}

* Props are similar to arguments/ parameters, like as we use in vanilla Javascript

* Props is everything is about Parent-child communication
## Example

### Vanilla JS
* function car(model,type){
     
     return(
        dash(model,type)
     )
}
car("Ford", "Muscle Hatchback")

### React
* function car (){
    return(
        <{dash argument={data} }/>
    )
}

* sending argument to dash component which local to car

* function dash (parameter){
    return(
      ....
    )
}

### Component Extraction or props variation

  
# Form Handling 
* Multiple Inputs and Checkbox

Approach : 
- Single Checkbox: Manage state with a boolean.
- Multiple Checkboxes: Use an object to manage the state of each checkbox.
- State Update: Use setState to update the state based on the checkbox's name and checked properties.

# single checkbox with inputs
## Logic
for the checkbox's we play in boolean and according to checked property

const {name, type, checked} = e.target
const newValue = type === "checkbox" ? checked : value;

setIsInput((oldState) => {return{
    ...oldState,
    [name] : newValue
}})

# Multiple selection checkbox with inputs 
## Logic
const { name, value, type, checked } = e.target;
  
      if (type === 'checkbox') {
        setisInput(oldState => ({
          ...oldState,
          [name]: checked ? [...oldState[name],value] : oldState[name].filter((item)=>item !==value),
        }));
      }
    else {
      setisInput(oldState => ({
        ...oldState,
        [name]: value,
      }));
    }

# Props
* <DashForm HandleSubmit={HandleBantu} HandleChange={HandleInputChange} />

- Props are custom Javascript Object Parameter which are used for component communication
- HandleSubmit is act as a Key or callback | HandleBantu is act as a value which is of parent component

# State Updates

## code1: 
const HandleInputChange = (InputData) => {
  setData(oldState => [...oldState, InputData]);
};

## code2: 
const HandleInputChange = (InputData) => {
  setData([...data, InputData]);
};

* code1 is more efficient and optimize to Use.

## Explanation:

- Functional Update: 
The first statement uses a functional update (oldState => [...oldState, InputData]). This ensures that the state update is based on the most recent state, which is crucial in asynchronous environments like React where state updates might be batched.

- Direct Update: 
The second statement (setData([...data, InputData])) directly uses the current state (data). This can lead to potential issues if multiple state updates are triggered in quick succession, as it might not reflect the latest state due to React's asynchronous state updates.
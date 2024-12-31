# Form Handling 
* Multiple Inputs and Checkbox

Approach : 
- Single Checkbox: Manage state with a boolean.
- Multiple Checkboxes: Use an object to manage the state of each checkbox.
- State Update: Use setState to update the state based on the checkbox's name and checked properties.

# single checkbox with inputs
# Logic
for the checkbox's we play in boolean and according to checked property

const {name, type, checked} = e.target
const newValue = type === "checkbox" ? checked : value;

setIsInput((oldState) => {return{
    ...oldState,
    [name] : newValue
}})

# Multiple selection checkbox with inputs 
# Logic
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
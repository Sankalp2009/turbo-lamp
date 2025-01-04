import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element">
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender">
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role">
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"} />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      {/* map through the userdata and render UserRow component to display the data in tabular format */}
      {/* print "no users found"  in there is no user data */}
    </div>
  );
}

export default App;

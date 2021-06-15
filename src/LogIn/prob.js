const wait = (time) => new Promise(resolve => setTimeout(resolve, 5000));

class Register extends Component {

  render() {
    return (
      <div>
        <h1>Register Page</h1>
        <Formik
          initialValues={{
            name: '',
            username: '',
            password: '',
            confirmPassword: ''
          }}
          validate={(values) => {
            const error = {};
            if(!values.name) {
              error.name = "Please Enter Name"
            }
            if(!values.username) {
                error.username = "Please Enter Username"
            }
            if(!values.password) {
                error.password = "Please Enter Password"
            }
            if(!values.confirmPassword) {
              error.confirmPassword = "Please Confirm Password"
            }
            if(values.confirmPassword !== values.password) {
              error.passMatch = 'Password does not match'
            }
            return error;
          }}
          onSubmit={async (values, actions) => {
            await wait(5000);
            console.log(actions)
          }}
        >
          {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                errors,
                touched
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {touched.name && errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
                {touched.username && errors.username && <span style={{ color: 'red'}}>{errors.username}</span>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {touched.password && errors.password && <span style={{ color: 'red'}}>{errors.password}</span>}
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                {touched.confirmPassword && errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword} </span>}
              </div>
              <div>
                {errors.passMatch && <span style={{color: 'red'}}>{errors.passMatch}</span>}
              </div>
              <div>
                <button disabled={isSubmitting} type="submit">Register</button>
                <button disabled={isSubmitting} type="reset">Reset</button>
              </div>
              <div>
                <Link to="/register">don't have accout? Please Register</Link>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Register;
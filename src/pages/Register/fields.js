import FormikInput from "../../components/FormikInput";
import FormikSelect from "../../components/FormikSelect";

const wait = (time) => new Promise((resolve) => setTimeout(resolve, 5000));

const checkMandatory = (value, fieldName) => (!value ? `${fieldName} is mandatory` : '');

const fields = [{
  name: 'name',
  label: 'Name',
  value: '',
  component: FormikInput,
  validate: (value) => checkMandatory(value, 'Name'),
},
{
  name: 'gender',
  label: 'Gender',
  value: '',
  component: FormikSelect,
  options: [{text: 'Male', value: 'Male'}, {text: 'Female', value: 'Female'}],
  validate: (value) => checkMandatory(value, 'Gender'),
},
{
  name: 'username',
  label: 'Username',
  value: '',
  component: FormikInput,
  validate: (value) => checkMandatory(value, 'Username'),
},
{
  name: 'password',
  label: 'Password',
  value: '',
  component: FormikInput,
  validate: (value) => checkMandatory(value, 'Password'),
},
{
  name: 'cPassword',
  label: 'Confirm Password',
  value: '',
  component: FormikInput,
  validate: (value) =>
    // if(values.password === values.cpassword) {
    //   return 'Password should match Confirm Password';
    // }
    checkMandatory(value, 'Confirm Password'),

}];

export default fields;
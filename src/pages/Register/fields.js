import FormikInput from "../../components/FormikInput";
import FormikSelect from "../../components/FormikSelect";

const checkMendetory = (value, fieldName) => (!value ? `${fieldName} is mendetory` : '');

const fields = [{
  name: 'name',
  label: 'Name',
  value: '',
  component: FormikInput,
  validate: (value) => checkMendetory(value, 'Name'),
},
{
  name: 'gender',
  label: 'Gender',
  value: '',
  component: FormikSelect,
  options: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
  validate: (value) => checkMendetory(value, 'Gender'),
},
{
  name: 'username',
  value: '',
  label: 'Username',
  component: FormikInput,
  validate: (value) => checkMendetory(value, 'Username'),
},
{
  name: 'password',
  value: '',
  label: 'Password',
  component: FormikInput,
  validate: (value) => checkMendetory(value, 'Password'),
},
{
  name: 'confirmPassword',
  value: '',
  label: 'Confirm Password',
  component: FormikInput,
  validate: (value) =>
  // if(values.password !== value) {
  //     return 'Password Should Match confirm password';
  // }
    checkMendetory(value, 'Confirm Password'),

}];

export default fields;

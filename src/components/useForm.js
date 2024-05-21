// import { useState } from 'react';

// const useForm = (callback, validate) => {
//   const [values, setValues] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (event) => {
//     if (event) event.preventDefault();
//     setIsSubmitting(true);

//     const noErrors = Object.keys(errors).length === 0;

//     if (noErrors) {
//       callback();
//     }

//     setIsSubmitting(false);
//   };

//   const handleChange = (event) => {
//     event.persist();
//     let name = event.target.name;
//     let val = event.target.value;

//     setValues({ ...values, [name]: val });
//     setErrors(validate(values));
//   };

//   return {
//     handleChange,
//     handleSubmit,
//     values,
//     errors,
//     isSubmitting,
//   };
// };

// export default useForm;
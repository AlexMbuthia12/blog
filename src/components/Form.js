import React from 'react';
import useForm from './hooks/useForm';

const validate = (values) => {
  const errors = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!values.title) {
    errors.title = 'Title is required';
  }

  if (!values.author) {
    errors.author = 'Author is required';
  }

  if (!values.body) {
    errors.body = 'Body is required';
  }

  if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Create = () => {
  const { handleChange, handleSubmit, values, errors, isSubmitting } = useForm(
    () => {
      // Call your API here on successful form submission
      console.log('Form submitted:', values);
    },
    validate
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            name="title"
            type="text"
            onChange={handleChange}
            value={values.title || ''}
          />
          {errors.title && (
            <p className="text-danger">{errors.title}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="author"
            type="text"
            onChange={handleChange}
            value={values.author || ''}
          />
          {errors.author && (
            <p className="text-danger">{errors.author}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            onChange={handleChange}
            name="body"
            rows={3}
            value={values.body || ''}
          />
import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
import { FormBox, FormButton } from './Searchbar.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
`;

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    const { newQuery } = values;

    if (newQuery.trim().length === 0) {
      toast.error('Please enter a value');
      actions.setSubmitting(false);
      return;
    }

    onSubmit(newQuery);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <FormBox>
      <Formik initialValues={{ newQuery: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => {
          return (
            <SearchForm>
              <FormButton type="submit" disabled={isSubmitting}>
                Search
              </FormButton>
              <Input
                name="newQuery"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </SearchForm>
          );
        }}
      </Formik>
    </FormBox>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

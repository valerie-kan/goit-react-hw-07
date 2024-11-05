import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be in format XXX-XX-XX")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        const action = addContact({ ...values, id: nanoid() });
        dispatch(action);
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          Name
          <Field
            className={css.formField}
            type="text"
            name="name"
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          Number
          <Field
            className={css.formField}
            type="text"
            name="number"
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

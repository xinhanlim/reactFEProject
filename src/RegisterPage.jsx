import React from 'react'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'

export default function RegisterPage(){
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        salutation: '',
        marketingPreferences: [],
        country: ''
      };

    const handleSubmit = (values, formikHelpers) => {
        console.log('Form values', values);
        formikHelpers.setSubmitting(false);
      }
    
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required')
        .matches(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$',
            'Password must contain at least 1 uppercase, 1 lowercase, and 1 number'
          ),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
        salutationun: Yup.string().required('Salutation is required'),
        country: Yup.string().required('Country is required'),
      })



    return (
    <>
    <div className="container mt-5">
    <h1>Register</h1>
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
    {(formik) => (
      <Form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <Field type="text" className="form-control" id="name" name="name"/>
        {formik.errors.name && formik.touched.name ? <div className="text-danger">{formik.errors.name}</div> : null}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <Field type="email" className="form-control" id="email" name="email" />
        {formik.errors.email && formik.touched.email ? <div className="text-danger">{formik.errors.email}</div> : null}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <Field type="password" className="form-control" id="password" name="password" />
        {formik.errors.password && formik.touched.password ? <div className="text-danger">{formik.errors.password}</div> : null}
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <Field type="password" className="form-control" id="confirmPassword" name="confirmPassword" />
        {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className="text-danger">{formik.errors.confirmPassword}</div> : null}
      </div>
      <div className="mb-3">
        <label className="form-label">Salutation</label>
        <div>
          <div className="form-check form-check-inline">
            <Field className="form-check-input" type="radio" name="salutation" id="mr" value="Mr" />
            <label className="form-check-label" htmlFor="mr">Mr</label>
          </div>
          <div className="form-check form-check-inline">
            <Field className="form-check-input" type="radio" name="salutation" id="ms" value="Ms" />
            <label className="form-check-label" htmlFor="ms">Ms</label>
          </div>
          <div className="form-check form-check-inline">
            <Field className="form-check-input" type="radio" name="salutation" id="mrs" value="Mrs" />
            <label className="form-check-label" htmlFor="mrs">Mrs</label>
          </div>
        {formik.errors.salutation && formik.touched.salutation ? <div className="text-danger">{formik.errors.salutation}</div> : null}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Marketing Preferences</label>
        <div className="form-check">
          <Field className="form-check-input" value="marketing" type="checkbox" id="emailMarketing" name="marketingPreferences"/>
          <label className="form-check-label" htmlFor="emailMarketing">Email Marketing</label>
        </div>
        <div className="form-check">
          <Field className="form-check-input" value="sms" type="checkbox" id="smsMarketing" />
          <label className="form-check-label" htmlFor="smsMarketing" name="marketingPreferences">SMS Marketing</label>
        </div>
        {formik.errors.marketingPreferences && formik.touched.marketingPreferences ? <div className="text-danger">{formik.errors.marketingPreferences}</div> : null}
      </div>
      <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
        <Field as='select' className="form-select" id="country" name="country">
          <option value="">Select Country</option>
          <option value="sg">Singapore</option>
          <option value="my">Malaysia</option>
          <option value="in">Indonesia</option>
          <option value="th">Thailand</option>
        </Field>
        {formik.errors.country && formik.touched.country ? <div className="text-danger">{formik.errors.country}</div> : null} 
      </div>
      <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting} >Register</button>
    </Form>
        )}
    </Formik>
    </div>
    </>
    );
}

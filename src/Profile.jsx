import { useJwt } from './UserStore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useFlashMessage } from "./FlashMessageStore"
import { useLocation } from 'wouter';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function Profile() {
    const { getJwt } = useJwt();
    const [initialValues, setInitialValues] = useState({}); 
    const { showFlashMessage } = useFlashMessage();
    const [,setLocation] = useLocation();

    useEffect(()=> {
        const token = getJwt();
        console.log(token);

        if(!token) {
            showFlashMessage("Not Logged In", "Danger")

        } else{
                const fetchData = async () => {
                    const response = await axios.get(import.meta.env.VITE_API_URL + "/api/users/me",{
                        headers:{
                            Authorization: "Bearer " + token
                        }
                    }) 
                    .catch(function (e){
                        showFlashMessage("Please Log In Again", "Danger");
                        setLocation('/login');
                    })
                    console.log(response.data)
                    setInitialValues({
                        ...response.data,
                        marketingPreferences: response.data.preferences.map(p=>p.preference)
                    });
                }
                fetchData();
        }
    },[])

    const handleSubmit = async () => {

    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        salutation: Yup.string(),
        country: Yup.string(),
    });

    return(<>

        <div className='container'>
            <h1>User Profile</h1>

            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} enableReinitialize>
          {function(formik) {
            return (
            <Form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <Field type="text" className="form-control" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" className="form-control" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="text-danger" />
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
                  <ErrorMessage name="salutation" component="div" className="text-danger" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Marketing Preferences</label>
                <div className="form-check">
                  <Field className="form-check-input" value="Email Updates" type="checkbox" id="emailUpdates" name="marketingPreferences" />
                  <label className="form-check-label" htmlFor="emailUpdates">Email Updates</label>
                </div>
                <div className="form-check">
                  <Field className="form-check-input" value="SMS Promotions " type="checkbox" id="smsPromotions" name="marketingPreferences" />
                  <label className="form-check-label" htmlFor="smsPromotions" name="marketingPreferences">SMS Promotions</label>
                </div>
                <div className="form-check">
                  <Field className="form-check-input" value="Newsletter" type="checkbox" id="newsletter" name="marketingPreferences" />
                  <label className="form-check-label" htmlFor="newsletter" name="marketingPreferences"> Newsletter</label>
                </div>
                <div className="form-check">
                  <Field className="form-check-input" value="New Product Announcements" type="checkbox" id="newProductAnn" name="marketingPreferences" />
                  <label className="form-check-label" htmlFor="newProductAnn" name="marketingPreferences"> New Product Announcements</label>
                </div>
                <ErrorMessage name="marketingPreferences" component="div" className="text-danger" />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <Field as='select' className="form-select" id="country" name="country">
                  <option value="">Select Country</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Thailand">Thailand</option>
                </Field>
                <ErrorMessage name="country" component="div" className="text-danger" />
              </div>
              <button type="submit" className="btn btn-primary mb-2 mt-2" disabled={formik.isSubmitting}>
                            {formik.isSubmitting ? 'Updating...' : 'Update Profile'}
                        </button>
            
            </Form>
          )}
        }
        </Formik>
        </div>

    </>)
}
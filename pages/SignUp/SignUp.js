import { useRouter } from 'next/router';
import classes from './SignUp.module.scss';
import { Formik, yupToFormErrors, useField, Form } from 'formik';
import * as Yup from 'yup';
// import Form from 'antd/lib/form/Form';
// import { OmitProps } from 'antd/lib/transfer/ListBody';
// import { Children } from 'react';

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={classes.textInput} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </>
    )
}

const CustomCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField(props, 'checkbox');

    return (
        <>
            <label className={classes.checkbox}>
                <input className={classes.checkboxInput} type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </>
    )
}

const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </>
    )
}

const SignUp = () => {
    const router = useRouter()
    return (

        <>
            <h1 className={classes.heading}> Sign Up</h1>
            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    password: '',
                    acceptedTerms: false,
                    specialPower: '',
                }}
                validationSchema={Yup.object({
                    fullName: Yup.string()
                        .required('Full Name is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Required'),

                    acceptedTerms: Yup.boolean()
                        .required('Required')
                        .oneOf([true], 'You must accept the terms and conditions'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false);
                    }, 3000)
                }}
            >
                {props => (
                    <Form className={classes.SignUp}>
                        <CustomTextInput label="Full Name" name="fullName" type="text" />
                        <CustomTextInput label="Email" name="email" type="email" />
                        <CustomTextInput label="Password" name="password" type="password" />
                        <CustomCheckbox name="acceptedTerms">
                            I accept the terms and conditions
                        </CustomCheckbox>
                        <button className={classes.signUpBtn} type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>

                        <h3 className={classes.Or}>- or -</h3>
                        <button className={classes.btnFacebook}>
                            {/* <i className="fa fa-facebook"></i> */}
                            Sign up with Facebook
                        </button>
                        <button className={classes.btnGoogle}>
                            {/* <i className="fa fa-facebook"></i> */}
                            Sign up with Google
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
export default SignUp
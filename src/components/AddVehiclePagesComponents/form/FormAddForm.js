import React, {useState} from "react";
import {Form, Formik, Field, validateYupSchema} from "formik";
import CustomInput from "./CustomInput";
import CustomCheckBox from "./CustomCheckBox";
import {advancedSchema} from "./schemas";
import "./form.scss";




const FormAddForm = () => {


    const onSubmit = async (values, actions) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDataAddCar(perv => [...perv, values] )

        fetch("  http://localhost:8000/carAdd",{
            method: "POST",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(values)
        }).then((res)=> {

        }).catch((err)=> {

        })

        actions.resetForm();
    }
    const [dataAddCar, setDataAddCar] = useState([])


    return (
        <Formik initialValues={{ name:"",surname:"", acceptedTos: false, carYear: "", carInfo: "", email:"", carPrice: "", carImg:""}}
                validationSchema={advancedSchema}

                onSubmit={onSubmit}
        >
            {({isSubmitting}) => (
                <Form>
                    <CustomInput label={"Name"} name={"name"} type={"text"} placeholder={"Enter your name!"}/>
                    <CustomInput label={`Surname`} name={"surname"} type={"text"} placeholder={"Enter your surname"}/>
                    <CustomInput label={"E-mail"} name={"email"} type={"email"} placeholder={"Enter your E-mail"}/>
                    <CustomInput label={`Car Year`} name={"carYear"} type={"number"} placeholder={"Enter the year of manufacture of the car"}/>
                    <CustomInput label={`Car Info`} name={"carInfo"} type={"text"} placeholder={"Write something about this car"}/>
                    <CustomInput label={`Car price per day`} name={"carPrice"} type={"text"} placeholder={"Enter your price for rent per day"}/>
                    <CustomInput label={`Car img`} name={"carImg"} type={"file"} placeholder={"Upload Image of your car"}/>
                    <CustomCheckBox type={"checkbox"} name={"acceptedTos"}/>

                    <button className={"button-form"} disabled={isSubmitting} type={"submit"}>Submit</button>
                </Form>


            )}
        </Formik>

    );
}

export default FormAddForm;
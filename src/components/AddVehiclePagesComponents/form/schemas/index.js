import * as yup from "yup"

export  const advancedSchema = yup.object().shape({
    name: yup.string().min(5,"Username must be at least 5 characters long").required("Required"),
    surname: yup.string().min(5,"Surname must be at least 5 characters long").required("Required"),
    acceptedTos: yup.boolean().oneOf([true], "Pleas accept the terms of service"),
    carYear: yup.number().required("Required"),
    carInfo: yup.string().min(60,"Opinion must have min 60 letters").required("Required"),
    email: yup.string().email("Pleas enter a valid e-mail").required("Required"),
    carPrice: yup.string().required("Write your price")

})
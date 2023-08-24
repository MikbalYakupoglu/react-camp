import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button, FormField, Label } from 'semantic-ui-react'
import ProductService from '../services/productService';
import KIOTextInput from '../utilities/customForm/KIOTextInput';

export default function ProductAdd() {
    const initalValues = {
        name: "",
        unitPrice: ""
    };

    const schema = Yup.object({
        name: Yup.string().required("Ürün adı boş bırakılamaz."),
        unitPrice: Yup.number().required("Ürün fiyatı boş bırakılamaz.")
    })

    function handleProductAdd(product) {
        let productService = new ProductService();
        productService.createProduct(product)
            .then(result => console.log(result))
            .catch(error => console.error(error))
    }


    return (
        <div>
            <Formik
                initialValues={initalValues}
                validationSchema={schema}
                onSubmit={(values) => handleProductAdd(values)}
            >
                <Form className='ui form'>
                    <KIOTextInput name="name" placeholder="Ürün Adı" />
                    <KIOTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
                    <Button primary type='submit'>Oluştur</Button>
                </Form>
            </Formik>
        </div>
    )
}

import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function KIOTextInput({ ...params }) {
    const [field, meta] = useField(params);

    return (
        <div>
            <FormField error={meta.touched && !!meta.error}  >
                <input {...field} {...params} />
                {meta.touched && !!meta.error ? (<Label pointing basic color='red' content={meta.error}></Label>) : null}
            </FormField>
        </div>
    )
}

import * as yup from 'yup';

export const validationSchema = yup.object({
	theme: yup
		.string()
		.required('required'),
	slides: yup
		.string()
		.required('required'),
})
import * as Yup from "yup";
import { useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
// material
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// component
import Iconify from "../../../components/Iconify";
import { useDispatch } from "react-redux";
import { register } from "../../../slices/auth";

// ----------------------------------------------------------------------

export default function RegisterForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const RegisterSchema = Yup.object().shape({
		name: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Name required"),
		identification: Yup.string().required("Identification is required"),
		email: Yup.string()
			.email("Email must be a valid email address")
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
	});

	const formik = useFormik({
		initialValues: {
			name: "",
			identification: "",
			email: "",
			password: "",
		},
		validationSchema: RegisterSchema,
		onSubmit: () => {
			const { name, identification, email, password } = formik.values;
			setLoading(true);
			dispatch(register({ name, identification, email, password }))
				.unwrap()
				.then(() => {
					navigate("/dashboard", { replace: true });
				})
				.catch(() => {
					setLoading(false);
				});
		},
	});

	const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

	return (
		<FormikProvider value={formik}>
			<Form autoComplete='off' noValidate onSubmit={handleSubmit}>
				<Stack spacing={4}>
					<TextField
						fullWidth
						label='Name'
						{...getFieldProps("name")}
						error={Boolean(touched.name && errors.name)}
						helperText={touched.name && errors.name}
					/>

					<TextField
						fullWidth
						label='Identification'
						{...getFieldProps("identification")}
						error={Boolean(touched.identification && errors.identification)}
						helperText={touched.identification && errors.identification}
					/>
					
					<TextField
						fullWidth
						autoComplete='username'
						type='email'
						label='Email address'
						{...getFieldProps("email")}
						error={Boolean(touched.email && errors.email)}
						helperText={touched.email && errors.email}
					/>

					<TextField
						fullWidth
						autoComplete='current-password'
						type={showPassword ? "text" : "password"}
						label='Password'
						{...getFieldProps("password")}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<IconButton
										edge='end'
										onClick={() => setShowPassword((prev) => !prev)}
									>
										<Iconify
											icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
										/>
									</IconButton>
								</InputAdornment>
							),
						}}
						error={Boolean(touched.password && errors.password)}
						helperText={touched.password && errors.password}
					/>

					<LoadingButton
						fullWidth
						size='large'
						type='submit'
						variant='contained'
						loading={loading}
					>
						Register
					</LoadingButton>
				</Stack>
			</Form>
		</FormikProvider>
	);
}

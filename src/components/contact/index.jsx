import {
	Box,
	FormControl,
	FormLabel,
	TextField,
	Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
	'& label.Mui-focused': {
		color: 'green',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'green',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#c7c9c8',
			opacity: '0.4',
		},
		'&:hover fieldset': {
			borderColor: 'white',
			opacity: '1',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'white',
		},
	},
});

const Contact = () => {
	return (
		<Box>
			<Typography variant="h4" fontWeight={'bold'} textAlign={'center'} m={3}>
				Contact With Me
			</Typography>
			<Box width={'100%'}>
				<FormControl>
					<FormLabel htmlFor="name" sx={{ color: 'white' }}>
						name
					</FormLabel>
					<CssTextField id="name" fullWidth></CssTextField>
				</FormControl>
			</Box>
		</Box>
	);
};

export default Contact;

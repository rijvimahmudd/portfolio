import { Typography } from '@mui/material';
import { string } from 'prop-types';

const Profession = ({ profession = '', color = '' }) => {
	const modifiedProfession = profession.split(' || ');
	const result = modifiedProfession.map((element, index) => (
		<>
			{element}{' '}
			{index < modifiedProfession.length - 1 && (
				<Typography key={index} color={color} component={'span'} variant="h6">
					||{' '}
				</Typography>
			)}
		</>
	));
	return (
		<Typography variant="h6" color="#ffffff" fontWeight={'regular'}>
			{result}
		</Typography>
	);
};

Profession.propTypes = {
	profession: string,
	color: string,
};

export default Profession;

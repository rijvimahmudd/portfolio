import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '300px',
	filter: 'drop-shadow(30px 10px 4px rgba(0,0,0,0.15))',
});

const About = () => {
	return (
		<Grid container spacing={2} justifyContent={'space-between'}>
			<Grid item xs={6}>
				<Typography variant="h4">About Me</Typography>

				<Typography variant="body1">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod vero
					aut porro sit natus voluptate libero. Architecto, nulla
					exercitationem. Rem eligendi consequuntur modi sit corrupti
					repellendus esse ullam quisquam deserunt!
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<Img src="/rijvi.png"></Img>
			</Grid>
		</Grid>
	);
};

export default About;

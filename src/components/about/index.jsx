import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	// borderBottom: '10px solid green',
	// maxHeight: '500px',
	height: '30rem',
	filter: `drop-shadow(5px 5px 5px rgba(34, 197, 94, 0.25)) 
	drop-shadow(-5px -5px 5px rgba(34, 197, 94, 0.25))`,
});

const About = () => {
	return (
		<Grid
			container
			spacing={2}
			sx={{
				alignItems: 'center',
				height: '95vh',
			}}
		>
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

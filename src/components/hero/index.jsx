import { Box, Card, Typography, CardContent, CardMedia } from '@mui/material';
import Profession from './profession';
import Typewriter from 'typewriter-effect';

const profession =
	'Web Developer || Programmer || Problem Solver || Software Engineer';

const Hero = () => {
	return (
		<Card
			sx={{
				display: 'flex',
				gap: '55px',
				height: '85vh',
				alignItems: 'center',
				background: 'none',
			}}
		>
			<Box
				// border={'1px solid white'}
				sx={{ display: 'flex', flexDirection: 'column', marginTop: -5 }}
			>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography variant="h5" fontWeight={'medium'} color={'#22c55e'}>
						Hello! I am
					</Typography>
					<Typography
						variant="h2"
						ml={'-4px'}
						fontWeight={'bolder'}
						color={'#ffffff'}
					>
						<Typewriter
							options={{
								strings: ['Rijvi Mahmud.'],
								autoStart: true,
								loop: true,
								delay: 90,
							}}
						></Typewriter>
					</Typography>
					<Typography variant="h4" color={'#22c55e'}>
						Full Stack Developer
					</Typography>
					<Profession profession={profession} color={'#22c55e'}></Profession>
				</CardContent>
			</Box>
			<CardMedia
				sx={{ width: 453, borderRadius: '20px', marginTop: -5 }}
				component="img"
				image="/avento.gif"
				alt="Live from space album cover"
			/>
		</Card>
	);
};

export default Hero;

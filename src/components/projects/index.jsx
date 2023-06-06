import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const data = [
	{ id: 1, title: 'Card 1' },
	{ id: 2, title: 'Card 2' },
	{ id: 3, title: 'Card 3' },
	// Add more cards to the data array if needed
];

const Project = () => {
	return (
		<>
			<Typography variant="h4" fontWeight={'bold'} textAlign={'center'} m={3}>
				Projects
			</Typography>
			<Grid
				container
				// spacing={2}
				gap={0}
				display={'flex'}
				justifyContent={'space-between'}
				boxSizing={'border-box'}
			>
				{data.map(card => (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						key={card.id}
						sx={{
							// border: '1px solid pink',
							// width: '300px',
							display: 'flex',
						}}
						justifyContent={'space-around'}
					>
						<Card
							sx={{
								width: '95%',
								height: '100%',
								margin: '0 4px',
								backgroundColor: '#1D293A',
								borderRadius: '8px',
							}}
						>
							<CardContent>
								<CardMedia
									component={'img'}
									src="https://images.unsplash.com/photo-1611928482141-15f3896e635b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
									sx={{
										borderRadius: '6px',
									}}
								></CardMedia>
								<Typography
									variant="subtitle2"
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									Live Link <LaunchIcon fontSize="10px"></LaunchIcon>
								</Typography>
								<Typography>client side code link</Typography>
								<Typography>server side code link</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Project;

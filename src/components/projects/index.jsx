import { Grid, Card, CardContent } from '@mui/material';

const data = [
	{ id: 1, title: 'Card 1' },
	{ id: 2, title: 'Card 2' },
	{ id: 3, title: 'Card 3' },
	// Add more cards to the data array if needed
];

const Project = () => {
	return (
		<Grid
			container
			// spacing={2}
			display={'flex'}
			justifyContent={'flex-start'}
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
						border: '1px solid pink',
						width: '100%',
						display: 'flex',
					}}
					justifyContent={'center'}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Card
							sx={{
								width: '200px',
								height: '300px',
								margin: '0 4px',
							}}
						>
							<CardContent>{card.title}</CardContent>
						</Card>
					</div>
				</Grid>
			))}
		</Grid>
	);
};

export default Project;

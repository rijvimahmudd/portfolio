import { Card, CardContent, CardMedia, Grid } from '@mui/material';

const Project = () => {
	// Number of items to display
	const numberOfItems = 5;

	return (
		<Grid
			container
			sx={{
				height: '95vh',
				overflow: 'hidden',
			}}
			columnGap={14}
			rowGap={4}
		>
			{Array(numberOfItems)
				.fill()
				.map((_, id) => (
					<Grid item xs={3} key={id}>
						<Card
							sx={{
								width: '350px',
							}}
						>
							<CardContent>
								<CardMedia
									component={'img'}
									src="https://images.unsplash.com/photo-1626726484686-1f0f1f9c4ec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
								/>
								Item {id + 1} {/* Display the item number */}
							</CardContent>
						</Card>
					</Grid>
				))}
		</Grid>
	);
};

export default Project;

import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

const skills = [
	{
		name: 'html',
		icon: 'https://img.icons8.com/?size=48&id=20909&format=svg',
	},
];
const Skill = () => {
	return (
		<Box
			component={'div'}
			sx={{
				height: '70vh',
			}}
		>
			{skills.map((item, id) => {
				return (
					<Card
						key={id}
						sx={{
							backgroundColor: 'transparent',
							maxWidth: '48px',
						}}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								image={item.icon}
								alt={item.name}
								sx={{
									height: '48px',
									width: '48px',
								}}
							/>

							<CardContent>
								<Typography sx={{ color: 'white' }}> {item.name}</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				);
			})}
		</Box>
	);
};

export default Skill;

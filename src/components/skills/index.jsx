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
	{
		name: 'css',
		icon: 'https://img.icons8.com/?size=512&id=7gdY5qNXaKC0&format=svg',
	},
	{
		name: 'js',
		icon: 'https://img.icons8.com/?size=512&id=108784&format=svg',
	},
];
const Skill = () => {
	return (
		<Box
			component={'div'}
			sx={{
				height: '70vh',
				display: 'flex',
				justifyContent: 'center',
				justifyItems: 'center',
			}}
			gap={3}
		>
			{skills.map((item, id) => {
				return (
					<Card
						key={id}
						sx={{
							backgroundColor: 'transparent',
							// maxWidth: '48px',
							display: 'flex',
							height: '80px',
						}}
					>
						<CardActionArea
							sx={{
								display: 'flex',
								justifyItems: 'center',
							}}
						>
							<CardMedia
								component="img"
								image={item.icon}
								alt={item.name}
								sx={{
									height: '76px',
									width: '76px',
								}}
							/>

							{/* <CardContent>
								<Typography sx={{ color: 'white' }}> {item.name}</Typography>
							</CardContent> */}
						</CardActionArea>
					</Card>
				);
			})}
		</Box>
	);
};

export default Skill;

import { Box, Tooltip, Typography, Stack, Fade } from '@mui/material';

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
	{
		name: 'bootstrap',
		icon: 'https://img.icons8.com/?size=512&id=84710&format=svg',
	},
	{
		name: 'tailwindcss',
		icon: 'https://img.icons8.com/?size=512&id=CIAZz2CYc6Kc&format=svg',
	},
	{
		name: 'nodejs',
		icon: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=svg',
	},
	{
		name: 'mongoDB',
		icon: 'https://img.icons8.com/?size=512&id=tBBf3P8HL0vR&format=svg',
	},
	{
		name: 'jwtoken',
		icon: 'https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=svg',
	},
	{
		name: 'reactJs',
		icon: 'https://img.icons8.com/?size=512&id=25Sjy8fKExYA&format=svg',
	},
	{
		name: 'nextJs',
		icon: 'https://www.svgrepo.com/show/354112/nextjs.svg',
	},
	{
		name: 'redux',
		icon: 'https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=svg',
	},
	{
		name: 'redux',
		icon: 'https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=svg',
	},
	{
		name: 'npm',
		icon: 'https://img.icons8.com/?size=512&id=24895&format=svg',
	},
	{
		name: 'expressJs',
		icon: 'https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=svg',
	},
	{
		name: 'expressJs',
		icon: 'https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=svg',
	},
	{
		name: 'expressJs',
		icon: 'https://img.icons8.com/?size=512&id=kg46nzoJrmTR&format=svg',
	},
];
const Skill = () => {
	return (
		<Box height={'95vh'} sx={{ border: '1px solid white', width: '100%' }}>
			<Typography variant="h4" fontWeight={'bold'} textAlign={'center'} m={3}>
				Skills
			</Typography>

			<Stack
				direction={'row'}
				justifyContent={'center'}
				alignItems={'center'}
				useFlexGap
				spacing={10}
				flexWrap={'wrap'}
				// sx={{
				// 	border: '1px solid tomato',
				// }}
			>
				{skills.map((item, id) => (
					<Tooltip
						key={id}
						title={item.name.toUpperCase()}
						arrow
						TransitionComponent={Fade}
						TransitionProps={{ timeout: 300 }}
						// followCursor
					>
						<Box
							component={'img'}
							src={item.icon}
							sx={{
								width: '60px',
								height: '60px',
							}}
						></Box>
					</Tooltip>
				))}
			</Stack>
		</Box>
	);
};

export default Skill;

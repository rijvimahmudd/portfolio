import { Box, Container, Stack, Typography } from '@mui/material';

const menuLinks = [
	{
		title: 'home',
		link: '/',
	},
	{
		title: 'project',
		link: '/',
	},
	{
		title: 'contact',
		link: '/',
	},
	{
		title: 'about',
		link: '/',
	},
];

const Navbar = () => {
	return (
		<>
			<Box
				sx={{
					height: '70px',
					// backgroundColor: 'orange',
				}}
			>
				<Container
					sx={{
						alignItems: 'center',
						display: 'flex',
						// alignContent: 'center',
						height: '100%',
					}}
				>
					<Typography
						variant="h5"
						sx={{ flexGrow: 1 }}
						fontWeight={'bolder'}
						fontFamily={'macondo'}
						letterSpacing={1.5}
					>
						Rijvi Mahmud.
					</Typography>
					<Stack direction={'row'} spacing={3}>
						{menuLinks.map((item, index) => {
							return (
								<Typography
									key={index}
									variant="overline"
									fontWeight={'light'}
									sx={{ cursor: 'pointer' }}
								>
									{' '}
									{item.title.toUpperCase()}{' '}
								</Typography>
							);
						})}
					</Stack>
				</Container>
			</Box>
		</>
	);
};

export default Navbar;

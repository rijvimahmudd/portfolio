import { Box, Container, Link, Stack, Typography } from '@mui/material';

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
					position: 'fixed',
					width: '100%',
					zIndex: '999',
					backgroundColor: '#111a28',
				}}
			>
				<Container
					sx={{
						alignItems: 'center',
						display: 'flex',
						// alignContent: 'center',
						height: '100%',
						width: '100%',
						// position: 'absolute',
					}}
				>
					<Typography
						variant="h5"
						sx={{ flexGrow: 1 }}
						fontWeight={'bolder'}
						fontFamily={'macondo'}
						letterSpacing={1.5}
					>
						<Link href="/" sx={{ border: '1px solid white' }}>
							<Box component={'img'} height={'54px'} src="/logo.svg"></Box>
						</Link>
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

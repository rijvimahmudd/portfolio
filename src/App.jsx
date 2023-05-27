import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './components/navbar';
import './App.css';
import Hero from './components/hero';
import About from './components/about';

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar></Navbar>
			<Container>
				<Box
					sx={{
						position: 'absolute',
						marginTop: '70px',
					}}
				>
					<Hero></Hero>
					<About></About>
				</Box>
			</Container>
		</>
	);
}

export default App;

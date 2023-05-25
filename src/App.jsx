import { Container, CssBaseline } from '@mui/material';
import Navbar from './components/navbar';
import './App.css';
import Hero from './components/hero';

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar></Navbar>
			<Container>
				<Hero></Hero>
			</Container>
		</>
	);
}

export default App;

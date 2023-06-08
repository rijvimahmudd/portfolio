import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './components/navbar';
import './App.css';
import Hero from './components/hero';
import About from './components/about';
import useDocumentTitle from './hooks/useDocumentTitle';
import Skill from './components/skills';
import Project from './components/projects';
import Contact from './components/contact';

function App() {
	//TODO - have to work on make title dynamic from profession
	useDocumentTitle('Rijvi Mahmud - Web Developer | Problem Solver');
	return (
		<>
			<CssBaseline />

			<Navbar></Navbar>
			<Container
				fixed
				sx={{
					clear: 'both',
					overflow: 'auto',
					// width: '80vw',
					margin: 'auto',
					border: '1px solid orange',
				}}
			>
				<Box
					sx={{
						// position: 'absolute',
						marginTop: '70px',
					}}
				>
					<Hero></Hero>
					<About></About>
					<Skill></Skill>
					<Project></Project>
					<Contact></Contact>
				</Box>
			</Container>
		</>
	);
}

export default App;

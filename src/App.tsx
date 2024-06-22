import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Homepage from './pages/Homepage/Homepage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Main />}></Route>
					<Route path='/chatbot' element={<Homepage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

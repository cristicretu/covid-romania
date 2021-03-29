import Navbar from './components/Navbar.js';
import ListOfStat from './components/ListOfStat.js';
import { fetchData } from './constant';

export default function App() {

	fetchData();

	return (
		<div class="font-lexend bg-gray-900 min-h-screen">
			<Navbar />
			<ListOfStat />
		</div>
	);
}

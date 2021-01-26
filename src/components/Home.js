import { useEffect } from 'react';
import ChangeColor from './ChangeColor';
import { initSocket, disconnectSocket } from '../socketService';
function Home() {
	useEffect(() => {
		initSocket();
		return () => disconnectSocket();
	}, []);
	return (
		<div>
			<ChangeColor />
		</div>
	);
}

export default Home;

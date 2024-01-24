import Header from './components/header/Header';
import Main from './components/main/Main';
import { GlobalStyles } from './styles/GlobalStyles';
import UserProvider from './providers/UserProvider';

const App = () => {
	return (
		<UserProvider>
			<GlobalStyles />
			<Header />
			<Main />
		</UserProvider>
	);
};

export default App;

import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { StyledHeader } from './styles';

const Header = () => {
	const { userActive, setUserActive } = useContext(UserContext);
	return (
		<StyledHeader>
			<h1>Users Control</h1>
			{!userActive && <p>No user active</p>}
			{userActive && (
				<>
					<p>User Active: {userActive}</p>
					<button onClick={() => setUserActive('')}>Logout User</button>
				</>
			)}
		</StyledHeader>
	);
};

export default Header;

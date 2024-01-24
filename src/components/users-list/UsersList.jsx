import { useContext } from 'react';
import { USERS } from '../../constants/users';
import { UserContext } from '../../contexts/UserContext';
import User from '../user/User';
import { StyledUsersList } from './styles';

const UsersList = () => {
	const { userActive, setUserActive } = useContext(UserContext);
	return (
		<StyledUsersList>
			{USERS.map(user => (
				<User
					key={user.id}
					userActive={userActive}
					setUserActive={setUserActive}
					{...user}
				/>
			))}
		</StyledUsersList>
	);
};

export default UsersList;

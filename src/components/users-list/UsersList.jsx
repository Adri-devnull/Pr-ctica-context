import { USERS } from '../../constants/users';
import User from '../user/User';
import { StyledUsersList } from './styles';

const UsersList = () => {
	return (
		<StyledUsersList>
			{USERS.map(user => (
				<User key={user.id} {...user} />
			))}
		</StyledUsersList>
	);
};

export default UsersList;

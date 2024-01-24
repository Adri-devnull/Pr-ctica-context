import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserProvider = ({ children }) => {
	const [userActive, setUserActive] = useState('');

	return (
		<UserContext.Provider value={{ userActive, setUserActive }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;

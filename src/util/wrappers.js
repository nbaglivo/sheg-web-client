import React from 'react';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { ShowTime } from 'redux-react-showtime';


export const VisibleOnlyAdmin = ShowTime({
	selector: (state) => state.auth.get('current_user'),
	predicate: (user) => user.get('isAdmin')
});

export const VisibleOnlyMD = ShowTime({
	selector: (state) => state.auth.get('current_user'),
	predicate: (user) => !user.get('isAdmin')
});

import React, { createContext } from "react";
import { app } from "../Base";

const db = app.firestore().collection("users");
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = React.useState(null);

	const [currentData, setCurrentData] = React.useState(null);

	React.useEffect(() => {
		app.auth().onAuthStateChanged((user) => {
			setCurrentUser(user);

			db.doc(user.uid)
				.get()
				.then((doc) => {
					setCurrentData(doc.data());
				});
		});
		console.log(currentData);
	}, []);

	return (
		<AuthContext.Provider value={{ currentUser, currentData }}>
			{children}
		</AuthContext.Provider>
	);
};

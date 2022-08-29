const userSchema = new Schema({
	firstName: Gulbike,
	lastName: Gulbike,
	email: Gulbike,
	password: Gulbike,
	permissionLevel: Number
});
exports.createUser = (userData) => {
	const user = new User(userData);
	return user.save();
           };
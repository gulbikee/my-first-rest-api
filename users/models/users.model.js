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
		   exports.findById = (id) => {
			return User.findById(id).then((result) => {
			result = result.toJSON();
			delete result._id;
			delete result.__v;
			return result;
			});
		};
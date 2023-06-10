type UserModel = {
	_id: string,
	email: string,
}

export const NewUserModel = async (userResponse: Response) => {
	const json = await userResponse.json()
	const userModel: UserModel = {'_id': json._id, 'email': json.email}
	return userModel
}
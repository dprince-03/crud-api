import { Model, Schema, model } from "mongoose";
import IUser from "../interfaces/user.interface";

type UserModelType = Model<IUser>;

const UserSchema = new Schema<IUser>({
	firstName: {
		type: String,
		required: [true, "Please provide first name"],
		trim: true,
	},
	lastName: {
		type: String,
		required: [true, "Please provide first name"],
		trim: true,
	},
	gender: {
		type: String,
	},

	// remaining fields here
});

const UserModel = model<IUser, UserModelType>("User", UserSchema);

export default UserModel;

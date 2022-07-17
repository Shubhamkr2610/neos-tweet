import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
// import {profile} from '../../assets'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Kumar",
    username: "shubham@2610",
    // userphoto: profile,
    password: "testuser123",
    email: "guestuser@gmail.com",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Learning web Development at @neogCamp`
  },
];

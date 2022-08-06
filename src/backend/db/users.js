import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import {elon, ratantata, shubham, tanay} from '../../assets'
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
    email: "guestuser@gmail.com",
    password: "testuser123",
    userphoto: shubham,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Learning web Development at @neogCamp`
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    email: "tanaypratap@gmail.com",
    password: "tanay123",
    userphoto: tanay,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ` Fixing indian education system  `
  },
  {
    _id: uuid(),
    firstName: "Elon",
    lastName: "Musk",
    username: "elonmusk",
    email: "elonmusk@gmail.com",
    password: "elonmusk123",
    userphoto: elon,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: ` Founder, CEO, and Chief Engineer at SpaceX; angel investor`
  },
  {
    _id: uuid(),
    firstName: "Ratan",
    lastName: "Tata",
    username: "ratantata",
    email: "ratantata@gmail.com",
    password: "ratantata123",
    userphoto: ratantata,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `chairman of Tata Group`
  },
];

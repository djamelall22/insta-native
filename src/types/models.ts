// IPost inteface
export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  images?: string[];
  video?: string;
  description?: string;
  user?: IUser;
  numOfComments: number;
  numOfLikes: number;
  comments: IComment[];
}

// IUser inteface
export interface IUser {
  id: string;
  username: string;
  image?: string;
  name: string[];
  bio?: string;
  posts?: IPost[];
  website?: string;
}

// IUser inteface
export interface IComment {
  id: string;
  comment: string;
  user?: IUser;
}

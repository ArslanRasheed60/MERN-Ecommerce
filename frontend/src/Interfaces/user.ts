export default interface IUserAction{
    type: string;
    payload: any
}

export default interface IUser {
    _id?: any;
    name?: string;
    email?: string;
    password?: string;
    isAdmin?: boolean;
  }
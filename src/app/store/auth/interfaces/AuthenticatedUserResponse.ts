import {IUser} from '@app/store/auth/interfaces/IUser';

export interface AuthenticatedUserResponse {
    user: IUser;
    token: string;
}

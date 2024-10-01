import PendingInprogress from './PendingInprogress';
import Completed from './Completed';
import Cancelled from './Cancelled';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { IUser } from '../../hooks/user.interface';
import DashUser from './DashUser';

export default function Dashboard() {
    const user = useSelector((state: RootState) => state.auth.user) as IUser;

    return (
        <>
            <div>
                {user.role !== 'User' ? (
                    <>
                        <PendingInprogress />
                        <Completed />
                        <Cancelled />
                    </>
                ) : (
                    <DashUser />
                )}
            </div>
        </>
    );
}

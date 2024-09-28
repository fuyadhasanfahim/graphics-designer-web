import DashNav from '../../components/shared/dashboardNavbar/DashNav';
import AccountSettings from './AccountSettings';

export default function DashAccountSettings() {
    return (
        <div className="flex">
            <DashNav />
            <AccountSettings />
        </div>
    );
}

import Users from '../../components/admin/Users';
import DashNav from '../../components/shared/dashboardNavbar/DashNav';

export default function UsersPage() {
    return (
        <div className="flex">
            <DashNav />
            <Users />
        </div>
    );
}

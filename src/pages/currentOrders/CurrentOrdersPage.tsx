import CurrentOrders from '../../components/currentOrders/CurrentOrders';
import DashNav from '../../components/shared/dashboardNavbar/DashNav';

export default function CurrentOrdersPage() {
    return (
        <>
            <div className="flex">
                <DashNav />
                <CurrentOrders />
            </div>
        </>
    );
}

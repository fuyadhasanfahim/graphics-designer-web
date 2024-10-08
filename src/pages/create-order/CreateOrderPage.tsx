import CreateOrder from '../../components/createOrder/CreateOrder'
import DashNav from '../../components/shared/dashboardNavbar/DashNav'

export default function CreateOrderPage() {
    return (
        <div className="flex">
            <DashNav />
            <CreateOrder />
        </div>
    )
}

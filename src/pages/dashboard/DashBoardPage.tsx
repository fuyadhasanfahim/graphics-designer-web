import Dashboard from '../../components/dashboard/Dashboard'
import DashNav from '../../components/shared/dashboardNavbar/DashNav'

export default function DashBoardPage() {
    return (
        <>
            <div className="flex">
                <DashNav />
                <Dashboard />
            </div>
        </>
    )
}

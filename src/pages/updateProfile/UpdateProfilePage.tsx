import SideMenu from '../../components/profile/SideMenu';
import UpdateProfile from '../../components/updateProfile/updateProfile';

export default function UpdateProfilePage() {
    return (
        <div className="bg-white h-dvh flex">
            <div className="col-span-3">
                <SideMenu />
            </div>
            <div className="col-span-8 w-full max-w-xl mx-auto">
                <p className="text-start text-lg font-medium">Update Profile</p>
                <UpdateProfile />
            </div>
        </div>
    );
}

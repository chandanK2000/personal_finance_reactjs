
import { useSelector } from "react-redux";

import AdminDashboard from "./admindashboard/AdminDashboard";
import UserDashboard from "./userdashboard/UserDashboard";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);

    if (!user) {
        return <p>Please log in to continue.</p>;
    }

    const roleName = String(
        user.roleName ?? user.RoleName ?? user.role ?? ""
    ).trim().toUpperCase();

    if (roleName === "ADMIN") {
        return <AdminDashboard />;
    }

    if (roleName === "USER") {
        return <UserDashboard />;
    }

    return <p>You do not have permission to access this dashboard.</p>;
};

export default Dashboard;

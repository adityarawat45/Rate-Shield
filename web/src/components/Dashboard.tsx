import ContentArea from "./ContentArea"
import Sidebar from "./SideBar"
import {useRecoilState } from "recoil";
import { selectedPageState } from "../recoil/atom";

const Dashboard: React.FC = () => {
    const [selectedPage, setSelectedPage] = useRecoilState(selectedPageState );

    return (
        <div className="overflow-x-hidden overflow-y-hidden flex w-screen h-screen flex-row bg-global-bg lg:space-x-4 lg:p-3">
            <div className="hidden lg:block"><Sidebar onSelectPage={setSelectedPage} /></div>
            <ContentArea selectedPage={selectedPage} />
        </div>
    )
}

export default Dashboard
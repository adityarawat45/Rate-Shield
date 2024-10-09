import { useState } from "react"
import ContentArea from "./ContentArea"
import Sidebar from "./SideBar"

const Dashboard: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState('API_CONFIGURATION')

    return (
        <div className="overflow-x-hidden overflow-y-hidden flex w-screen h-screen flex-row bg-global-bg lg:space-x-4 lg:p-3">
            <div className="hidden lg:block"><Sidebar onSelectPage={setSelectedPage} /></div>
            <ContentArea selectedPage={selectedPage} />
        </div>
    )
}

export default Dashboard
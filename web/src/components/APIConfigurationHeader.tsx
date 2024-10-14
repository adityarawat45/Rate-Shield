import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rule } from "../api/rules";
import { useState } from "react";
import logo from './../assets/logo.svg'
import { IoSearch } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { drawerState, selectedPageState } from "../recoil/atom";
import Sidebar from "./SideBar";


interface Props {
    openAddOrUpdateRuleDialog: (rule: rule | null) => void
    setSearchRuleText: (searchText: string) => void
}

const APIConfigurationHeader: React.FC<Props> = ({ openAddOrUpdateRuleDialog, setSearchRuleText }) => {
    const [searchedText, setSearchedText] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [showDrawer, setShowDrawer] = useRecoilState(drawerState);
    const [selectedPage, setSelectedPage] = useRecoilState(selectedPageState);

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchedText(value);
        setSearchRuleText(value); 
    };

    const toggleSearchButton = () => {
        setShowSearch(!showSearch)
    }
    const toggleDrawer =() => {
        setShowDrawer(!showDrawer)
    }
    
    return (
        <div className="lg:px-8 lg:py-8 flex justify-between">
            <p className="hidden lg:block text-[1.375rem] font-poppins font-medium text-slate-900">APIs Configurations</p>
            {/* Large devices */}
            <div className="hidden lg:flex space-x-4">
                <div className="relative">
                    <input
                        className="bg-slate-200 pl-4 pr-4 py-2 rounded-md w-full focus:outline-none"
                        placeholder="Search Rules"
                        onChange={(e) => {
                            setSearchedText(e.target.value)
                        }}
                    />
                </div>
                <button className="bg-sidebar-bg text-slate-200 py-2 px-4 rounded-md flex items-center"
                    onClick={() => {
                        setSearchRuleText(searchedText)
                    }}>
                    <FontAwesomeIcon icon={faSearch} className="text-white" />
                </button>

                <button className="bg-sidebar-bg text-slate-200 py-2 px-4 rounded-md flex items-center" onClick={() => {
                    openAddOrUpdateRuleDialog(null)}}>
                    <span className="mr-2">+</span>
                    Add New
                </button>
            </div>
            {/* small device */}

            <div className="flex-col lg:hidden"> 
                            {/* Sidebar for small devices */}
            {showDrawer ? (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 z-50">
                <div className="w-64 h-full bg-white shadow-lg">
                    <Sidebar onSelectPage={setSelectedPage} />
                </div>
                </div>
               ) : null}
               <nav className="bg-black w-screen p-3 justify-between items-center flex">
                  <div onClick={toggleDrawer}><HiMiniBars3 color="white" size={24}/></div>
                  <img src={logo} />
                  <div onClick={toggleSearchButton}>
                     {showSearch ? (
                     <IoSearch color="white" size={24} />
                     )  : (
                    <FaXmark color="white" size={24} />
                     )}
                  </div>
               </nav>
                   {!showSearch ? (<div className="flex justify-center items-center"> 
                    <input
                       className="bg-gray-200 p-3 py-2 m-3 rounded-sm w-full outline outline-none text-sm focus:outline-gray-400 focus:outline-1"
                        placeholder="Enter api endpoint to search"
                        onChange={handleSearchInput}
                    />
                   </div>) : null}
            </div>
        </div>
    )
}

export default APIConfigurationHeader
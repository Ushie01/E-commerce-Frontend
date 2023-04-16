import menu from './../../assets/list.svg';

const AdminNav = ({onclick}) => {

    return (
        <>
            <div className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-cyan-500 to-blue-500 ">
                <p className="text-white text-3xl font-bold">
                    Euphorya
                </p>
                <button onClick={onclick}>
                    <img src={menu} alt={menu} className="w-8 h-8"/>
                </button>
           </div>
        </>
    )
}

export default AdminNav;
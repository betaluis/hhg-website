interface Props {
    isOpen: boolean;
}

const MenuButton = ({ isOpen }: Props) => {
    return (
        <>
            { 
                isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" className="fill-content-dark-2 cursor-pointer mt-2 stroke-content-dark-2" width="20" height="20" id="x"><path fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 1 1 13M1 1l12 12"></path></svg>)
                    : (<svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer fill-content-dark-2" width="20" height="20" viewBox="0 0 92 92" id="menu"><path d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"></path></svg>)
            }
        </>
    ) 
}

export default MenuButton;

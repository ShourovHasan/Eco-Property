
const Navbar = () => {

    const menuItems = <>
        <li><a href='/'>Home</a></li>
        <li tabIndex={0}>
            <a className="justify-between">
                Rent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a href='/flatRent'>Flat</a></li>
                <li><a href='/houseRent'>House</a></li>
                <li><a href='/plotRent'>Plot</a></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <a className="justify-between">
                Sale
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a href='/flatSale'>Flat</a></li>
                <li><a href='/houseSale'>House</a></li>
                <li><a href='/plotSale'>Plot</a></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <a className="justify-between">
                Loan
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li><a href='/flatLoan'>Flat</a></li>
                <li><a href='/houseLoan'>House</a></li>
                <li><a href='/plotLoan'>Plot</a></li>
            </ul>
        </li>
        <li><a>Blog</a></li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems} 
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li> */}
                    {menuItems}                    
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;
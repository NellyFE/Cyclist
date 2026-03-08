export const Nav = () => {
    return(
        <nav className="flex p-6 mx-auto  ">

            {/* logo */}
            <div className="logo">
                <img src="images/cyclistlogo.svg" alt="logo" className="w-[48px] h-[59px]"/>
            
            </div>

            <div className="navitems flex justify-between items-center w-full">

                {/* the first nav items */}
                <div className="navlinks flex mx-6 py-2 px-4 gap-6 bg-[#F5F5F5] rounded-full">
                    <a href="">How it Works</a>
                    <a href="">Features</a>
                    <a href="">Testimonials</a>
                    <a href="">FAQ</a>
                </div>


                {/* second navitem where download is  */}
                <div className="downloadbtn flex bg-[#D6D6D6] opacity-[60%] py-2 px-4 rounded-full">
                    <a href="">Download App</a>

                </div>
            </div>
        </nav>
    )
}
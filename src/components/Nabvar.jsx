import Links from "next/link";
function Navbar() {
    return (
        <nav className="bg-gray-300 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Links href="#" className="font-bold text-lg text-black">Mi Aplicación</Links>
                </div>
                <div>
                    <ul className="flex">
                        <li className="mr-4 ">
                            <Links href="/" className="text-gray-800 hover:text-blue-800">Tareas</Links>
                        </li>
                        <li className="mr-4">
                            <Links href="/new" className="text-gray-800 hover:text-blue-800">Nueva Tareas</Links>
                        </li>
                        <li>
                            <Links href="/about" className="text-gray-800 hover:text-blue-800">Acerca de</Links>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

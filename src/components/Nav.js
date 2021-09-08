import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<header className="bg-white dark:bg-gray-800">
			<nav className="bg-white dark:bg-gray-800">
				<div className="container p-6 mx-auto">
					<Link
						className="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
						to="/"
					>
						Custom Hook Libraries
					</Link>

					<div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
						<Link
							to="/"
							className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
						>
							home
						</Link>

						<Link
							to="/useinput"
							className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
						>
							useInput
						</Link>

						<Link
							to="/usetabs"
							className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
						>
							useTabs
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}

import useInput from '../hooks/useInput';

function Form() {
	const maxLength = (value) => value.length <= 25 && !value.includes('@');
	const checkLength = useInput('', maxLength);
	const email = useInput('@');

	return (
		<div class="min-h-screen bg-purple-400 flex flex-col justify-center items-center">
			<h1 class="bg-purple-400 text-center text-white text-7xl pb-10">useInput Hook</h1>
			<div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
			<div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
			<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
				<div>
					<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
						Create An Account
					</h1>
					<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
						Create an account to enjoy all the services without any ads for free!
					</p>
				</div>
				<div class="space-y-4">
					<input
						type="text"
						placeholder="Name"
						class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
						{...checkLength}
					/>
					<input
						type="text"
						placeholder="Email Address"
						class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
						{...email}
					/>
					<input
						type="text"
						placeholder="Password"
						class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
					/>
				</div>
				<div class="text-center mt-6">
					<button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">
						Create Account
					</button>
					<p class="mt-4 text-sm">
						Already Have An Account?{' '}
						<span class="underline cursor-pointer"> Sign In</span>
					</p>
				</div>
			</div>
			<div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
			<div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
		</div>
	);
}

export default Form;

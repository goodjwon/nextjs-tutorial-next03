export default async function getAllUsers(){
	const res = await fetch('https://jsonplaceholder.typicode.com/users');

	if(!res.ok) throw new Error('fail to fetch data');

	console.log(res);

	return res.json();
}
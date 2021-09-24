import '@babel/polyfill';
import app from './app';

async function main() {
	await app.listen(3001);
	console.log('http://localhost:3001/');
}

main();

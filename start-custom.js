const { execSync } = require('child_process');

console.log('Starting the development server...');

// Run the original react-scripts start command
execSync('react-scripts start', { stdio: 'inherit' });

// Print the custom message after the server starts
console.log('\nYou can now view Tsuragi in the browser.');
console.log('  Local:            http://localhost:3000/');
console.log('  On Your Network:  http://192.168.0.121:3000/');
console.log('\nNote that the development build is not optimized.');
console.log('To create a production build, use npm run build.');

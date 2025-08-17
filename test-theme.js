#!/usr/bin/env node
import { colors, icons, message } from './lib/theme.js';

console.log('\n🎨 Testing GitStats CLI Theme\n');

// Test basic colors
console.log('=== Basic Colors ===');
console.log(colors.primary('Primary Color (Bright Blue)'));
console.log(colors.success('Success Color (Teal)'));
console.log(colors.error('Error Color (Soft Red)'));
console.log(colors.warning('Warning Color (Amber)'));
console.log(colors.info('Info Color (Cyan)'));
console.log(colors.dim('Dim Color (Gray)'));

console.log('\n=== Message Functions ===');
console.log(message.success('Repository analyzed successfully!'));
console.log(message.error('Not a git repository'));
console.log(message.warning('Large repository, this might take time'));
console.log(message.info('Scanning git history...'));

console.log('\n=== Git-Specific Messages ===');
console.log(message.title('GitStats CLI'));
console.log(message.git('Repository found'));
console.log(message.branch('Found 5 branches'));
console.log(message.commit('120 commits analyzed'));
console.log(message.user('3 contributors detected'));
console.log(message.stats('Statistics generated'));

console.log('\n=== Styled Text ===');
console.log(message.highlight('Welcome to GitStats CLI!'));
console.log(message.subtitle('Choose an option below:'));

console.log('\n=== All Icons ===');
Object.entries(icons).forEach(([name, icon]) => {
    console.log(`${icon} ${name}`);
});

console.log('\n✅ Theme test complete!\n');

#!/usr/bin/env node
import {argv} from "process"
import { colors, icons , message} from "./lib/theme.js"
import inquirer from "inquirer";


function showIntro() {
  const logo = `
      ${colors.primary(' ██████╗ ██╗████████╗███████╗████████╗ █████╗ ████████╗███████╗')}
      ${colors.primary('██╔════╝ ██║╚══██╔══╝██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝')}
      ${colors.primary('██║  ███╗██║   ██║   ███████╗   ██║   ███████║   ██║   ███████╗')}
      ${colors.primary('██║   ██║██║   ██║   ╚════██║   ██║   ██╔══██║   ██║   ╚════██║')}
      ${colors.primary('╚██████╔╝██║   ██║   ███████║   ██║   ██║  ██║   ██║   ███████║')}
      ${colors.primary(' ╚═════╝ ╚═╝   ╚═╝   ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝')}
  `;

  console.log(logo);

  console.log(message.title('Welcome to GitStats'));

  console.log(message.subtitle('Unlocking the stories hidden in your commit history.'));
  
  console.log(''); 

  console.log(message.info('Analyzing repository in the current directory...'));

  console.log(''); 
}

async function showMainMenu() {
  const choices = [
    {
      name: `${icons.commit} Commit History`,
      value: 'commits'
    },
    {
      name: `${icons.branch} Branches`,
      value: 'branches'
    },
    {
      name: `${icons.user} Contributors`,
      value: 'contributors'
    },
    {
      name: `${icons.stats} Repository Stats`,
      value: 'stats'
    },
    new inquirer.Separator(),
    
    {
      name: `${icons.error} Exit`,
      value: 'exit'
    }
  ];

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to explore?',
      choices: choices,
      pageSize: 10
    }
  ]);

  return answer.action;
}

async function handleUserChoice(choice) {
  console.log('');

  switch (choice) {
    case 'commits':
      console.log(message.info('Analyzing commit history...'));
      break;
    
    case 'branches':
      console.log(message.info('Scanning branches...'));
      break;
    
    case 'contributors':
      console.log(message.info('Identifying contributors...'));
      break;
    
    case 'stats':
      console.log(message.info('Generating repository statistics...'));
      break;
    
    case 'exit':
      console.log(message.success('Thanks for using GitStats! 👋'));
      process.exit(0);
      break;
    
    default:
      console.log(message.error('Unknown option selected'));
  }
}

async function startCLI() {
  try {
    showIntro();
    
    while (true) {
      const choice = await showMainMenu();
      await handleUserChoice(choice);
      
      console.log('');
      
      const continueChoice = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'continue',
          message: 'Return to main menu?',
          default: true
        }
      ]);
      
      if (!continueChoice.continue) {
        console.log(message.success('Thanks for using GitStats! 👋'));
        process.exit(0);
      }
    }
  } catch (error) {
    if (error.isTtyError) {
      console.log(message.error('Prompt could not be rendered in the current environment'));
    } else {
      console.log(message.error('Something went wrong: ' + error.message));
    }
    process.exit(1);
  }
}

startCLI();
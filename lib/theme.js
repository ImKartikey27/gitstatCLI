import chalk from "chalk";

// // Option 1: Vercel-inspired (modern, professional)       
// export const colors = {
//     primary: chalk.hex('#0070f3'),    
//     success: chalk.hex('#46a758'),    
//     error: chalk.hex('#e5484d'),      
//     warning: chalk.hex('#ffb224'),    
//     info: chalk.hex('#0054ad'),       
//     dim: chalk.hex('#8f8f8f'),     
// }
export const colors = {
    primary: chalk.hex('#52a9ff'),    
    success: chalk.hex('#0ac5b2'),    
    error: chalk.hex('#ff6369'),        
    warning: chalk.hex('#f1a10d'),    
    info: chalk.cyan,                 
    dim: chalk.gray,      
}

export const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',

    git: '📦',
    branch: '🌿',
    commit: '📝',
    user: '👤',
    stats: '📊',
    rocket: '🚀',
    folder: '📁',
    clock: '🕐'
}


export const message = {
    success: (text) => `${icons.success} ${colors.success(text)}`,
    error: (text) => `${icons.error} ${colors.error(text)}`,
    warning: (text) => `${icons.warning} ${colors.warning(text)}`,
    info: (text) => `${icons.info} ${colors.info(text)}`,
    
    // Git-specific messages
    git: (text) => `${icons.git} ${colors.primary(text)}`,
    branch: (text) => `${icons.branch} ${colors.success(text)}`,
    commit: (text) => `${icons.commit} ${colors.info(text)}`,
    user: (text) => `${icons.user} ${colors.primary(text)}`,
    stats: (text) => `${icons.stats} ${colors.primary(text)}`,
    
    // Special formatting
    title: (text) => `${icons.rocket} ${colors.primary.bold(text)}`,
    subtitle: (text) => colors.dim(text),
    highlight: (text) => colors.primary.bold(text)
}
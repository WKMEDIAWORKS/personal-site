import { 
    rootDirectory, 
    subDirectories, 
    aboutFiles, 
    projectFiles, 
    photoFile 
} from "./filesystemhierarchy.js";

rootDirectory();

document.addEventListener('DOMContentLoaded', () => {
    const terminalContainer = document.getElementById('terminal-container');
    const terminalOutput = document.getElementById('terminal-output');
    const toggleTerminalButton = document.getElementById('toggle-terminal');
    
    let currentDirectory = 'root';
    let inputBuffer = '';
    let history = [];
    let historyIndex = -1;

  
    toggleTerminalButton.addEventListener('click', () => {
        terminalContainer.classList.toggle('hidden');
        resetPrompt();
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        
        if (!terminalContainer.classList.contains('hidden')) {
            // If the terminal is visible, show the cursor
            const cursor = document.querySelector('.cursor');
            if (cursor) cursor.style.display = 'inline-block';
        }
    });
    

    document.addEventListener('keydown', (e) => {
        if (!terminalContainer.classList.contains('hidden')) {
            e.preventDefault();
            
            switch(e.key) {
                case 'Enter':
                    executeCommand(inputBuffer.trim());
                    resetPrompt();
                    break;
                case 'Backspace':
                    inputBuffer = inputBuffer.slice(0, -1);
                    break;
                case 'ArrowUp':
                    if (historyIndex < history.length - 1) {
                        historyIndex++;
                        inputBuffer = history[history.length - 1 - historyIndex];
                    }
                    break;
                case 'ArrowDown':
                    if (historyIndex > 0) {
                        historyIndex--;
                        inputBuffer = history[history.length - 1 - historyIndex];
                    }
                    break;
                default:
                    if (e.key.length === 1) {
                        inputBuffer += e.key;
                    }
            }
            
            updateTerminalDisplay();
        }
    });

    function updateTerminalDisplay() {
        const prompt = `user@website:~$ ${inputBuffer}`;
        const currentLine = document.createElement('div');
        currentLine.classList.add('current-line');
        currentLine.innerHTML = `${prompt}<span class="cursor">_</span>`;
    
        const historyContent = history.map(entry => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('history');
            historyItem.innerHTML = entry;
            return historyItem;
        });
    
        terminalOutput.innerHTML = '';
    
        historyContent.forEach(item => terminalOutput.appendChild(item));

        terminalOutput.appendChild(currentLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function resetPrompt() {
        inputBuffer = '';
        historyIndex = -1;
        updateTerminalDisplay();
    }
    

    function executeCommand(command) {
        if (!command) return;
        
        const args = command.split(' ');
        const cmd = args[0].toLowerCase();
        const arg = args.slice(1).join(' ');
        
        let output = '';
        switch (cmd) {
            case 'ls':
                output = handleLS();
                break;
            case 'cd':
                output = handleCD(arg);
                break;
            case 'cat':
                output = handleCAT(arg);
                break;
            case 'clear':
                history = [];  
                terminalOutput.innerHTML = '';  
                resetPrompt();  
                return;
            default:
                output = `Command not found: ${cmd}`;
        }
        
        history.push(`user@website:~$ ${command}\n${output}`);
        updateTerminalDisplay();
    }
    
    
      
    function handleLS() {
        let contents = [];
        switch(currentDirectory) {
            case 'root':
                contents = ['about', 'projects', 'photos'];
                updateGUI();
                break;
            case 'about':
                contents = ['About Me', 'About This Website'];
                break;
            case 'projects':
                contents = ['bootloader', 'weather', 'etch a sketch'];
                break;
            case 'photos':
                contents = ['images.r'];
                break;
        }
        return contents.join('    ');
    }

    function handleCD(dir) {
        const validDirs = ['about', 'projects', 'photos'];
        
        if (!dir) return 'Usage: cd <directory>';
        
        if (dir === '..') {
            currentDirectory = 'root';
        } else if (validDirs.includes(dir)) {
            currentDirectory = dir;
        } else {
            return `cd: no such directory: ${dir}`;
        }
        
        updateGUI();
        return `Changed directory to: ${currentDirectory}`;
    }

    function handleCAT(file) {
        const fileMap = {
            about: {
                'About Me': 'aboutme.html',
                'About This Website': 'aboutsite.html'
            },
            projects: {
                'bootloader': 'bootloader.html',
                'weather': 'weatherapp.html',
                'etch a sketch': 'etchasketch.html'
            },
            photos: {
                'images.r': 'images.html'
            }
        };

        if (fileMap[currentDirectory]?.[file]) {
            window.location.href = fileMap[currentDirectory][file];
            return `Opening ${file}...`;
        }
        return `cat: no such file: ${file}`;
    }

    function updateGUI() {
        const rootContainer = document.getElementById('root-container');
        const subContainer = document.getElementById('sub-container');
        
        if (subContainer) subContainer.remove();
        
        const rootIcon = rootContainer.querySelector('img');
        rootIcon.src = currentDirectory === 'root' 
            ? './assets/folder.png' 
            : './assets/open-folder.png';

        if (currentDirectory !== 'root') {
            subDirectories();
            
            requestAnimationFrame(() => {
                switch(currentDirectory) {
                    case 'about':
                        aboutFiles(document.getElementById('global-about-container'));
                        break;
                    case 'projects':
                        projectFiles(document.getElementById('global-project-container'));
                        break;
                    case 'photos':
                        photoFile(document.getElementById('global-photo-container'));
                        break;
                }
            });
        }
    }
});
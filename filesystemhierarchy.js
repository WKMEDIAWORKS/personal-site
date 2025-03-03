const globalContainer = document.getElementById("global-container");

export function rootDirectory() {
    const rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", "root-container");

    const rootDirIcon = document.createElement("img");
    rootDirIcon.src = "./assets/folder.png";
    rootDirIcon.classList.add("rootdir-icon");

    const rootDir = document.createElement("div");
    rootDir.classList.add("root-dir");
    rootDir.textContent = "root";

    rootContainer.appendChild(rootDirIcon);
    rootContainer.appendChild(rootDir);

    globalContainer.appendChild(rootContainer);
    
    let isOpen = false;
    rootContainer.addEventListener('click', () => {
        if (isOpen) {
            rootDirIcon.src = "./assets/folder.png"; 
            const subContainer = document.getElementById("sub-container");
            globalContainer.removeChild(subContainer); 
        } else {
            rootDirIcon.src = "./assets/open-folder.png"; 
            subDirectories();
        }
        isOpen = !isOpen; 
    });
}

function subDirectories() {
    const subContainer = document.createElement("div");
    subContainer.setAttribute("id", "sub-container");

    const globalAboutContainer = document.createElement("div");
    globalAboutContainer.setAttribute("id", "global-about-container");

    const aboutContainer = document.createElement("div");
    aboutContainer.setAttribute("id", "about-container");

    const aboutDirIcon = document.createElement("img");
    aboutDirIcon.src = "./assets/folder.png";
    aboutDirIcon.classList.add("aboutdir-icon");

    const aboutDir = document.createElement("div");
    aboutDir.textContent = "about";
    aboutDir.classList.add("about-dir");

    aboutContainer.appendChild(aboutDirIcon);
    aboutContainer.appendChild(aboutDir);

    globalAboutContainer.appendChild(aboutContainer);


    const globalProjectContainer = document.createElement("div");
    globalProjectContainer.setAttribute("id", "global-project-container");

    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("id", "project-container");

    const projectDirIcon = document.createElement("img");
    projectDirIcon.src = "./assets/folder.png";
    projectDirIcon.classList.add("projectdir-icon");

    const projectDir = document.createElement("div");
    projectDir.textContent = "projects";
    projectDir.classList.add("project-dir");

    projectContainer.appendChild(projectDirIcon);
    projectContainer.appendChild(projectDir);

    globalProjectContainer.appendChild(projectContainer);


    const globalPhotoContainer = document.createElement("div");
    globalPhotoContainer.setAttribute("id", "global-photo-container");

    const photoContainer = document.createElement("div");
    photoContainer.setAttribute("id", "photo-container");

    const photoDirIcon = document.createElement("img");
    photoDirIcon.src = "./assets/folder.png";
    photoDirIcon.classList.add("photodir-icon");

    const photoDir = document.createElement("div");
    photoDir.textContent = "photos";
    photoDir.classList.add("photo-dir");

    photoContainer.appendChild(photoDirIcon);
    photoContainer.appendChild(photoDir);
    globalPhotoContainer.appendChild(photoContainer);

    subContainer.appendChild(globalAboutContainer);
    subContainer.appendChild(globalProjectContainer);
    subContainer.appendChild(globalPhotoContainer);

    globalContainer.appendChild(subContainer);

    let aboutContainerIsOpen = false;
    aboutContainer.addEventListener('click', () => {
        if (aboutContainerIsOpen) {
            aboutDirIcon.src = "./assets/folder.png";
            const filesContainer = document.getElementById("about-files");
            if (filesContainer) {
                globalAboutContainer.removeChild(filesContainer);
            }
        } else {
            aboutDirIcon.src = "./assets/open-folder.png";
            aboutFiles(globalAboutContainer);
        }
        aboutContainerIsOpen = !aboutContainerIsOpen;
    });

    let projectContainerIsOpen = false;
    projectContainer.addEventListener('click', () => {
        if(projectContainerIsOpen) {
            projectDirIcon.src = "./assets/folder.png";
            const filesContainer = document.getElementById("project-files");
            if(filesContainer) {
                globalProjectContainer.removeChild(filesContainer);
            }
        } else {
            projectDirIcon.src = "./assets/open-folder.png";
            projectFiles(globalProjectContainer);
        }
        projectContainerIsOpen = !projectContainerIsOpen;
    });

    let photoContainerIsOpen = false;
    photoContainer.addEventListener('click', () => {
        if(photoContainerIsOpen) {
            photoDirIcon.src = "./assets/folder.png";
            const filesContainer = document.getElementById("photo-file");
            if(filesContainer) {
                globalPhotoContainer.removeChild(filesContainer);
            }
        } else {
            photoDirIcon.src = "./assets/open-folder.png";
            photoFile(globalPhotoContainer);
        }
        photoContainerIsOpen = !photoContainerIsOpen;
    });
}

function aboutFiles(globalAboutContainer) {
    const filesContainer = document.createElement("div");
    filesContainer.setAttribute("id", "about-files");

    const aboutMeContainer = document.createElement("div");
    aboutMeContainer.setAttribute("id", "aboutme-container");

    const aboutmeIcon = document.createElement("img");
    aboutmeIcon.src = "./assets/file.png";
    aboutmeIcon.classList.add("aboutme-icon");

    const aboutmeFile = document.createElement("div");
    aboutmeFile.textContent = "About Me";
    aboutmeFile.classList.add("aboutme-file");

    aboutMeContainer.appendChild(aboutmeIcon);
    aboutMeContainer.appendChild(aboutmeFile);

    const aboutSiteContainer = document.createElement("div");
    aboutSiteContainer.setAttribute("id", "aboutsite-container");

    const aboutsiteIcon = document.createElement("img");
    aboutsiteIcon.src = "./assets/file.png";
    aboutsiteIcon.classList.add("aboutsite-icon");

    const aboutsiteFile = document.createElement("div");
    aboutsiteFile.textContent = "About This Website";
    aboutsiteFile.classList.add("aboutsite-file");

    aboutSiteContainer.appendChild(aboutsiteIcon);
    aboutSiteContainer.appendChild(aboutsiteFile);

    filesContainer.appendChild(aboutMeContainer);
    filesContainer.appendChild(aboutSiteContainer);

    globalAboutContainer.appendChild(filesContainer); 

    aboutMeContainer.addEventListener('click', () => {
       window.location.href = "aboutme.html";
    });
    aboutSiteContainer.addEventListener('click', () => {
        window.location.href = "aboutsite.html";
    });

}

function projectFiles(globalProjectContainer) {
    const filesContainer = document.createElement("div");
    filesContainer.setAttribute("id", "project-files");

    const firstProjectContainer = document.createElement("div");
    firstProjectContainer.setAttribute("id", "first-project-container");

    const firstProjectIcon = document.createElement("img");
    firstProjectIcon.src = "./assets/file.png";
    firstProjectIcon.classList.add("file-icon");

    const firstProjectName = document.createElement("div");
    firstProjectName.textContent = "bootloader";
    firstProjectName.classList.add("file-name");

    firstProjectContainer.appendChild(firstProjectIcon);
    firstProjectContainer.appendChild(firstProjectName);


    const secondProjectContainer = document.createElement("div");
    secondProjectContainer.setAttribute("id", "second-project-container");

    const secondProjectIcon = document.createElement("img");
    secondProjectIcon.src = "./assets/file.png";
    secondProjectIcon.classList.add("file-icon");

    const secondProjectName = document.createElement("div");
    secondProjectName.textContent = "weather";
    secondProjectName.classList.add("file-name");

    secondProjectContainer.appendChild(secondProjectIcon);
    secondProjectContainer.appendChild(secondProjectName);


    const thirdProjectContainer = document.createElement("div");
    thirdProjectContainer.setAttribute("id", "third-project-container");

    const thirdProjectIcon = document.createElement("img");
    thirdProjectIcon.src = "./assets/file.png";
    thirdProjectIcon.classList.add("file-icon");

    const thirdProjectName = document.createElement("div");
    thirdProjectName.textContent = "etch a sketch";
    thirdProjectName.classList.add("file-name");

    thirdProjectContainer.appendChild(thirdProjectIcon);
    thirdProjectContainer.appendChild(thirdProjectName);

    filesContainer.appendChild(firstProjectContainer);
    filesContainer.appendChild(secondProjectContainer);
    filesContainer.appendChild(thirdProjectContainer);

    globalProjectContainer.appendChild(filesContainer);

    firstProjectContainer.addEventListener('click', () => {
        window.location.href = "bootloader.html";
    });
    secondProjectContainer.addEventListener('click', () => {
        window.location.href = "weatherapp.html";
    });
    thirdProjectContainer.addEventListener('click', () => {
        window.location.href = "etchasketch.html";
    });  
}

function photoFile(globalPhotoContainer) {
    const filesContainer = document.createElement("div");
    filesContainer.setAttribute("id", "photo-file");

    const firstPhotoContainer = document.createElement("div");
    firstPhotoContainer.setAttribute("id", "first-photo-container");

    const firstPhotoIcon = document.createElement("img");
    firstPhotoIcon.classList.add("file-icon");
    firstPhotoIcon.src = "./assets/file.png";

    const firstPhoto = document.createElement("div");
    firstPhoto.textContent = "images.r";
    firstPhoto.classList.add("file-name");

    firstPhotoContainer.appendChild(firstPhotoIcon);
    firstPhotoContainer.appendChild(firstPhoto);

    filesContainer.appendChild(firstPhotoContainer);
    globalPhotoContainer.appendChild(filesContainer);

    firstPhotoContainer.addEventListener('click', () => {
        window.location.href = "images.html";
    });
}

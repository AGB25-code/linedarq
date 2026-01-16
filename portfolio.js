// Portfolio projects data structure - all content embedded directly
const portfolioProjects = [
    {
        id: 'lixa',
        name: 'Lixa',
        description: 'Na LINEDARQ, projetamos mais do que edifícios, criamos experiências de vida! Este novo empreendimento multifamiliar, a desenvolver para o coração da cidade da Lixa, combina um design arquitetônico arrojado com funcionalidade e sofisticação.',
        images: ['lixa1.jpg', 'lixa2.jpg']
    },
    {
        id: 'backOffice',
        name: 'Back Office',
        description: 'Nas curvas do ferro, vemos refletidas histórias de vida. Construir uma casa é mais do que levantar paredes, é desenhar o abrigo de uma história.',
        images: ['backOffice.jpg']
    },
    {
        id: 'pedraNatural',
        name: 'Pedra Natural',
        description: 'Projeto que celebra a beleza natural da pedra, integrando elementos naturais com design contemporâneo.',
        images: ['pedraNatural1.jpg', 'pedraNatural2.jpg', 'pedraNatural3.jpg', 'pedraNatural4.jpg', 'pedraNatural5.jpg', 'pedraNatural6.jpg', 'pedraNatural7.jpg']
    },
    {
        id: 'designInteriores',
        name: 'Design de Interiores',
        description: 'Espaços interiores cuidadosamente projetados que combinam funcionalidade com estética refinada.',
        images: ['designInteriores1.jpg', 'designInteriores2.jpg', 'designInteriores3.jpg', 'designInteriores4.jpg']
    },
    {
        id: 'casaTerrea',
        name: 'Casa Térrea',
        description: 'Moradia térrea que harmoniza conforto e design moderno, criando espaços amplos e luminosos.',
        images: ['casaTerrea1.jpg', 'casaTerrea2.jpg', 'casaTerrea3.jpg']
    },
    {
        id: 'moradiaTerrea',
        name: 'Moradia Térrea',
        description: 'Projeto de moradia térrea com arquitetura contemporânea e integração perfeita com o ambiente.',
        images: ['moradiaTerrea1.jpg', 'moradiaTerrea2.jpg', 'moradiaTerrea3.jpg']
    },
    {
        id: 'piscinaPrivada',
        name: 'Piscina Privada',
        description: 'Área de lazer com piscina privada, projetada para criar momentos de relaxamento e convívio.',
        images: ['piscinaPrivada1.jpg', 'piscinaPrivada2.jpg', 'piscinaPrivada3.jpg', 'piscinaPrivada4.jpg']
    },
    {
        id: 'casaModular',
        name: 'Casa Modular T2',
        description: 'Um T2 modular, onde a inovação, o design e a eficiência se unem para oferecer conforto e sofisticação em cada detalhe.',
        images: ['casaModularT2.mov']
    }
];

// Load portfolio grid
function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    portfolioProjects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        // Get first image or video
        const firstMedia = project.images[0];
        const isVideo = firstMedia.endsWith('.mov') || firstMedia.endsWith('.mp4');

        // Create preview (truncate description)
        const preview = project.description.length > 100
            ? project.description.substring(0, 100) + '...'
            : project.description;

        projectItem.innerHTML = `
            ${isVideo
                    ? `<video class="project-image" muted loop>
                    <source src="${firstMedia}" type="video/mp4">
                   </video>`
                : `<img src="${firstMedia}" alt="${project.name}" class="project-image">`
            }
            <div class="project-info">
                <h3 class="project-name">${project.name}</h3>
                <p class="project-preview">${preview}</p>
            </div>
        `;

        // Add hover effect for videos
        if (isVideo) {
            const video = projectItem.querySelector('video');
            projectItem.addEventListener('mouseenter', () => video.play());
            projectItem.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }

        // Click to open modal
        projectItem.addEventListener('click', () => openProjectModal(project));

        portfolioGrid.appendChild(projectItem);
    });
}

// Open project modal
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalGallery = document.getElementById('modal-gallery');

    modalTitle.textContent = project.name;
    modalDescription.textContent = project.description;

    // Clear and populate gallery
    modalGallery.innerHTML = '';
    project.images.forEach(image => {
        const isVideo = image.endsWith('.mov') || image.endsWith('.mp4');

        if (isVideo) {
            const video = document.createElement('video');
            video.controls = true;
            video.style.width = '100%';
            const source = document.createElement('source');
            source.src = image;
            source.type = 'video/mp4';
            video.appendChild(source);
            modalGallery.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = image;
            img.alt = project.name;
            modalGallery.appendChild(img);
        }
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Stop all videos
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

// Event listeners for modal
const modalClose = document.getElementById('modal-close');
const modalOverlay = document.getElementById('modal-overlay');

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// ESC key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initialize portfolio on page load
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolio();
});

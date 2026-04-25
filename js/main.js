document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const submenuToggle = document.querySelector('.submenu-toggle');
    const submenu = document.querySelector('.submenu');

    // Menú hamburguesa
    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            toggle.classList.toggle('open');
        });

        // Cierra sidebar al hacer click en links normales (no en el toggle del submenú)
        sidebar.querySelectorAll('a:not(.submenu-toggle)').forEach((link) => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('open');
                toggle.classList.remove('open');
            });
        });
    }

    // Submenú: abre/cierra sin cerrar el sidebar
    if (submenuToggle && submenu) {
        submenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            submenu.classList.toggle('open');
        });
    }

    // Image Gallery Modal
    const galleryImages = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.querySelector('.modal-prev');
    const modalNext = document.querySelector('.modal-next');
    let currentImageIndex = 0;

    // Mosaicos: aplicar dos proporciones fijas segun orientacion real
    const mosaicImages = document.querySelectorAll('.mosaic-grid .gallery-img');
    const setMosaicTileClass = (img) => {
        if (!img || !img.naturalWidth || !img.naturalHeight) {
            return;
        }

        const ratio = img.naturalWidth / img.naturalHeight;
        img.classList.remove('tile-h', 'tile-v');
        if (ratio >= 1.1) {
            img.classList.add('tile-h');
        } else {
            img.classList.add('tile-v');
        }
    };

    if (mosaicImages.length > 0) {
        mosaicImages.forEach((img) => {
            if (img.complete) {
                setMosaicTileClass(img);
            } else {
                img.addEventListener('load', () => setMosaicTileClass(img));
            }
        });
    }

    if (galleryImages.length > 0 && modal) {
        // Abre el modal al hacer click en una imagen
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentImageIndex = index;
                openModalWithImage(index);
            });
        });

        // Función para abrir el modal con una imagen específica
        const openModalWithImage = (index) => {
            if (index >= 0 && index < galleryImages.length) {
                currentImageIndex = index;
                modalImage.src = galleryImages[index].src;
                modalImage.alt = galleryImages[index].alt;
                modalCaption.textContent = galleryImages[index].alt;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };

        // Cierra el modal
        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        // Navega a la siguiente imagen
        const nextImage = () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            openModalWithImage(currentImageIndex);
        };

        // Navega a la imagen anterior
        const prevImage = () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            openModalWithImage(currentImageIndex);
        };

        // Click en botón cerrar
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Click en botones de navegación
        if (modalNext) {
            modalNext.addEventListener('click', nextImage);
        }
        if (modalPrev) {
            modalPrev.addEventListener('click', prevImage);
        }

        // Click fuera de la imagen
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Cerrar con tecla ESC y navegación con flechas
        document.addEventListener('keydown', (e) => {
            if (modal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeModal();
                } else if (e.key === 'ArrowRight') {
                    nextImage();
                } else if (e.key === 'ArrowLeft') {
                    prevImage();
                }
            }
        });
    }
});
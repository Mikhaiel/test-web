document.getElementById('imageUpload').addEventListener('change', function(event) {
    const gallery = document.getElementById('imageGallery');
    gallery.innerHTML = '';  // Clear previous images
    Array.from(event.target.files).forEach(file => {
        const imgElement = document.createElement('img');
        imgElement.src = URL.createObjectURL(file);
        imgElement.onload = () => URL.revokeObjectURL(imgElement.src);  // Clean up memory
        gallery.appendChild(imgElement);
    });
});

function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

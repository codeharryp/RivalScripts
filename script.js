document.addEventListener("DOMContentLoaded", () => {
    function showSection(section) {
        document.getElementById('scripts').style.display = 'none';
        document.getElementById('how-to').style.display = 'none';
        document.getElementById(section).style.display = 'flex';
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(e.target.getAttribute('data-section'));
        });
    });

    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const textarea = button.previousElementSibling;
            textarea.select();
            document.execCommand('copy');
            alert('Script copied!');
        });
    });

    showSection('scripts');
});

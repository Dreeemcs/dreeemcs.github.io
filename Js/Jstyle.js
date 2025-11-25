// /c:/Users/Aluno/958/dreeemcs.github.io/Js/Jstyle.js
(function(){
    function init(){
        const btn = document.getElementById('themeToggle');
        const icon = document.getElementById('themeIcon');
        const root = document.documentElement;
        if (!btn || !icon) return;

        function applyTheme(theme){
            if (theme === 'light') {
                root.classList.add('light-theme');
                icon.className = 'bx bx-sun';
            } else {
                root.classList.remove('light-theme');
                icon.className = 'bx bx-moon';
            }
        }

        applyTheme(localStorage.getItem('theme') || 'dark');

        btn.addEventListener('click', () => {
            const newTheme = root.classList.contains('light-theme') ? 'dark' : 'light';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
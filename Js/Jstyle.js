// /c:/Users/Aluno/958/dreeemcs.github.io/Js/Jstyle.js
(function(){
    function init(){
        const btn = document.getElementById('themeToggle');
        const icon = document.getElementById('themeIcon');
        const root = document.documentElement;

        if (!btn) {
            console.warn('themeToggle (id="themeToggle") não encontrado no DOM.');
            return;
        }

        function applyTheme(theme){
            if (theme === 'light') {
                root.classList.add('light-theme');
                if (icon) {
                    icon.classList.remove('bx-moon');
                    icon.classList.add('bx-sun');
                }
            } else {
                root.classList.remove('light-theme');
                if (icon) {
                    icon.classList.remove('bx-sun');
                    icon.classList.add('bx-moon');
                }
            }
            try {
                localStorage.setItem('theme', theme);
            } catch (e) {
                console.warn('Erro ao acessar localStorage:', e);
            }
        }

        const stored = localStorage.getItem('theme');
        applyTheme(stored === 'light' ? 'light' : 'dark');

        btn.addEventListener('click', () => {
            const newTheme = root.classList.contains('light-theme') ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
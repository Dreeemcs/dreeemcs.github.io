// /c:/Users/Aluno/958/dreeemcs.github.io/Js/Jstyle.js
(function(){
    function init(){
        const btn = document.getElementById('themeToggle');
        const icon = document.getElementById('themeIcon');
        const target = document.body; // usar body para corresponder ao CSS

        if (!btn) {
            console.warn('themeToggle (id="themeToggle") não encontrado no DOM.');
            return;
        }

        function applyTheme(theme){
            if (theme === 'light') {
                target.classList.add('light-theme');
                if (icon) {
                    icon.classList.remove('bx-moon');
                    icon.classList.add('bx-sun');
                }
            } else {
                target.classList.remove('light-theme');
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
        // padrão para 'light' se não houver valor armazenado
        applyTheme(stored === 'dark' ? 'dark' : 'light');

        btn.addEventListener('click', () => {
            const newTheme = target.classList.contains('light-theme') ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

/* Typing effect: simple loop that types and deletes words */
(function(){
    function startTyping() {
        const el = document.getElementById('typed');
        if (!el) return;

        const words = [
            'Aluno da IFPR',
            'Aprendendo Python',
            'Construindo projetos web',
            'Curioso por programação'
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        const typeSpeed = 90;
        const deleteSpeed = 40;
        const pauseBetween = 1400;

        function tick() {
            const current = words[wordIndex];

            if (!deleting) {
                el.textContent = current.slice(0, charIndex + 1);
                charIndex++;

                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(tick, pauseBetween);
                    return;
                }
                setTimeout(tick, typeSpeed);
            } else {
                el.textContent = current.slice(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(tick, 300);
                    return;
                }
                setTimeout(tick, deleteSpeed);
            }
        }

        tick();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startTyping);
    } else {
        startTyping();
    }
})();
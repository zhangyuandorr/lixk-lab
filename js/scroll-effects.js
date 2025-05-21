
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航状态
    function updateNavState() {
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
    updateNavState();
    
    // 处理导航点击
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href === window.location.href) return;
            document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 平滑滚动处理（仅处理当前页面的锚点）
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // 检查是否是当前页面链接
        const isSamePage = anchor.href.startsWith(window.location.href.split('#')[0]);
        
        anchor.addEventListener('click', function(e) {
            if (isSamePage) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    duration: 800
                    });
                }
            }
        });
    });
});

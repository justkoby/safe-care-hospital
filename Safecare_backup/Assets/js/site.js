document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const collapseEl = document.getElementById("mainNav");
    const toggler = document.querySelector(".navbar-toggler");

    const syncNavbarState = () => {
        if (!navbar) return;
        const isOpen = collapseEl ? collapseEl.classList.contains("show") : false;
        navbar.classList.toggle("scrolled", window.scrollY > 20 || isOpen);
        navbar.classList.toggle("menu-open", isOpen);
        if (toggler) {
            toggler.setAttribute("aria-expanded", isOpen ? "true" : "false");
        }
    };

    if (collapseEl && window.bootstrap) {
        const menu = bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false });

        collapseEl.addEventListener("show.bs.collapse", syncNavbarState);
        collapseEl.addEventListener("shown.bs.collapse", syncNavbarState);
        collapseEl.addEventListener("hide.bs.collapse", syncNavbarState);
        collapseEl.addEventListener("hidden.bs.collapse", syncNavbarState);

        document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                if (window.innerWidth < 992 && collapseEl.classList.contains("show")) {
                    menu.hide();
                }
            });
        });

        document.addEventListener("click", (event) => {
            if (
                window.innerWidth < 992 &&
                collapseEl.classList.contains("show") &&
                navbar &&
                !navbar.contains(event.target)
            ) {
                menu.hide();
            }
        });
    }

    window.addEventListener("scroll", syncNavbarState, { passive: true });
    window.addEventListener("resize", syncNavbarState);
    syncNavbarState();
});

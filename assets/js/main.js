/* Daniel Islam — online resume: theme toggle, scroll reveal, active nav.
   Progressive enhancement: the site works fully without this file. */
(function () {
    "use strict";

    var root = document.documentElement;
    var STORAGE_KEY = "theme";

    /* ---- Theme toggle ---------------------------------------------------- */
    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    function storedTheme() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function currentTheme() {
        var explicit = root.getAttribute("data-theme");
        if (explicit === "dark" || explicit === "light") { return explicit; }
        return systemPrefersDark() ? "dark" : "light";
    }

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
        var btn = document.querySelector(".theme-toggle");
        if (btn) {
            btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
            btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
        }
    }

    function initThemeToggle() {
        var btn = document.querySelector(".theme-toggle");
        if (!btn) { return; }
        btn.addEventListener("click", function () {
            applyTheme(currentTheme() === "dark" ? "light" : "dark");
        });
        // Reflect the resolved state on the button at load.
        var t = currentTheme();
        btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
        btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }

    /* ---- Scroll reveal --------------------------------------------------- */
    function initReveal() {
        var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
        if (!items.length) { return; }

        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced || !("IntersectionObserver" in window)) {
            items.forEach(function (el) { el.classList.add("is-visible"); });
            return;
        }

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

        items.forEach(function (el) { io.observe(el); });
    }

    /* ---- Active section nav highlighting --------------------------------- */
    function initActiveNav() {
        var links = Array.prototype.slice.call(document.querySelectorAll(".topnav a[href^='#']"));
        if (!links.length || !("IntersectionObserver" in window)) { return; }

        var map = {};
        links.forEach(function (link) {
            var id = link.getAttribute("href").slice(1);
            var section = document.getElementById(id);
            if (section) { map[id] = link; }
        });

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var link = map[entry.target.id];
                if (!link) { return; }
                if (entry.isIntersecting) {
                    links.forEach(function (l) { l.classList.remove("is-active"); });
                    link.classList.add("is-active");
                }
            });
        }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

        Object.keys(map).forEach(function (id) {
            io.observe(document.getElementById(id));
        });
    }

    /* ---- Current year ---------------------------------------------------- */
    function initYear() {
        var el = document.getElementById("year");
        if (el) { el.textContent = String(new Date().getFullYear()); }
    }

    /* ---- Init ------------------------------------------------------------ */
    function init() {
        initThemeToggle();
        initReveal();
        initActiveNav();
        initYear();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();

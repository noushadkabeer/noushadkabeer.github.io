document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const scrollUpBtn = document.getElementById("scrollUpBtn");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 30) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        if (window.scrollY > 400) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".menu-btn").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

    if (typeof Typed !== "undefined") {
        new Typed(".typing", {
            strings: [
                "Principal AI Solutions Architect",
                "Multi-Agent & LangGraph Builder",
                "Enterprise Content (ECM) Leader",
                "Cloud & Distributed Systems Architect"
            ],
            typeSpeed: 65,
            backSpeed: 40,
            backDelay: 1600,
            loop: true
        });

        new Typed(".typing-2", {
            strings: [
                "Principal AI Solutions Architect",
                "LangGraph & MCP Specialist",
                "Hybrid RAG & Knowledge Graph Architect",
                "Enterprise Content Modernization Leader"
            ],
            typeSpeed: 65,
            backSpeed: 40,
            backDelay: 1600,
            loop: true
        });
    }
});

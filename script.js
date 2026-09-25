// Custom cursor
        const cursor = document.getElementById("cursor");
        const hoverElements = document.querySelectorAll("a, button, .cursor-hover");

        document.addEventListener("mousemove", (e) => {
            if (!cursor) return;
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });

        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                cursor.style.width = "60px";
                cursor.style.height = "60px";
                cursor.style.backgroundColor = "#FBFF48";
                cursor.style.mixBlendMode = "normal";
            });

            el.addEventListener("mouseleave", () => {
                cursor.style.width = "24px";
                cursor.style.height = "24px";
                cursor.style.backgroundColor = "#fff";
                cursor.style.mixBlendMode = "difference";
            });
        });

        // Scroll reveal
        const revealElements = document.querySelectorAll(".reveal");

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach((el) => revealObserver.observe(el));

        // Scroll progress
        window.addEventListener("scroll", () => {
            const scrollTop =
                document.body.scrollTop || document.documentElement.scrollTop;

            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress =
                scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

            document.getElementById("progressBar").style.width =
                progress + "%";
        });

        // Skill-card styling without adding another stylesheet per card
        document.querySelectorAll(".skill-card").forEach((card, index) => {
            const colors = [
                "#33FF57", "#FBFF48", "#3B82F6", "#FF70A6", "#A855F7",
                "#FF9F1C", "#33FF57", "#FBFF48", "#3B82F6", "#FF70A6",
                "#A855F7", "#FF9F1C", "#33FF57", "#FBFF48", "#3B82F6"
            ];

            card.style.cssText = `
                min-height:110px;
                padding:18px;
                border-right:1px solid rgba(255,255,255,.2);
                border-bottom:1px solid rgba(255,255,255,.2);
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                text-align:center;
                font-family:"JetBrains Mono",monospace;
                font-size:10px;
                color:#999;
                transition:all .15s ease;
                background:#121212;
            `;

            card.addEventListener("mouseenter", () => {
                card.style.background = colors[index % colors.length];
                card.style.color = "#000";
                card.style.transform = "translate(-2px,-2px)";
                card.style.zIndex = "5";
            });

            card.addEventListener("mouseleave", () => {
                card.style.background = "#121212";
                card.style.color = "#999";
                card.style.transform = "translate(0,0)";
            });

            const bold = card.querySelector("b");
            if (bold) {
                bold.style.color = "#fff";
                bold.style.fontFamily = '"Space Grotesk", sans-serif';
                bold.style.fontSize = "18px";
                bold.style.marginTop = "6px";
            }

            card.addEventListener("mouseenter", () => {
                if (bold) bold.style.color = "#000";
            });

            card.addEventListener("mouseleave", () => {
                if (bold) bold.style.color = "#fff";
            });
        });

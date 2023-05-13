const container = document.querySelector("#container");

const getRow = (heading, content, linkText, imageUrl) => {
    if (window.innerWidth <= 768) {
        return `
        <div class="row hidden">
            <div class="rowHeading">${heading}</div>
            <img src="${imageUrl}" />
            <div class="rowContent">${content}</div>
            <a href="#"
                >${linkText}
                <img src="https://www.xivtech.io/Arrow-black.svg" />
            </a>
        </div>
        `;
    }

    return `
    <div class="row hidden">
        <div class="left">
            <div class="rowHeading">${heading}</div>
            <div class="rowContent">
                ${content}
            </div>
            <a href="#"
                >${linkText}
                <img src="https://www.xivtech.io/Arrow-black.svg" />
            </a>
        </div>
        <div class="right">
            <img src="${imageUrl}" />
        </div>
    </div>
    `;
};

const addToHtml = (element, html) => {
    element.innerHTML += html;
};

const content = [
    {
        heading: "AI + RPA is what we do",
        content:
            "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
        linkText: "AI + RPA Automation",
        imageUrl: "https://www.xivtech.io/rp2.jpg",
    },
    {
        heading: "Make Bolder Choices",
        content: "Digital focused strategies to realize market-changing ideas",
        linkText: "Build Better Apps",
        imageUrl: "https://www.xivtech.io/p1.png",
    },
    {
        heading: "Innovate with Speed",
        content:
            "Create higher quality software, deliver on customer expectations and business goals",
        linkText: "DevOps",
        imageUrl: "https://www.xivtech.io/p2.jpg",
    },
    {
        heading: "Embrace Cloud",
        content:
            "With Cloud-First accelerate innovation and optimize performance",
        linkText: "Cloud Services",
        imageUrl: "https://www.xivtech.io/p3.jpg",
    },
];

function inflateContainer() {
    container.innerHTML = `
        <div class="heading">
            <h2>Let's collaborate</h2>
        </div>
    `;
    content.forEach((row) => {
        addToHtml(
            container,
            getRow(row.heading, row.content, row.linkText, row.imageUrl)
        );
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const rows = document.querySelectorAll(".hidden");
    rows.forEach((el) => observer.observe(el));
}

inflateContainer();
window.addEventListener("resize", inflateContainer);

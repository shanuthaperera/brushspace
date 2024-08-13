const itemsSlider = document.getElementById("itemslist");

async function fetchAndPopulate() {
    try {
        const dataUrl = './assets/data.json';
        const response = await fetch(dataUrl);
        const dataset = await response.json();

        dataset.forEach((element) => {
            const itemdiv = document.createElement("div");
            itemdiv.classList.add("item");

            const classinfo = document.createElement("div");
            classinfo.classList.add("class-info");

            const classByDiv = document.createElement("div");
            classByDiv.classList.add("class-by");
            classByDiv.innerHTML = `
                ${element.class}
                <div class="tutor">Course by <span>${element.tutor}</span></div>
            `;

            const actionBtnsDiv = document.createElement("div");
            actionBtnsDiv.classList.add("action-btns");

            const startLearningBtn = document.createElement("div");
            startLearningBtn.classList.add("start-learning");
            startLearningBtn.textContent = "Start Learning";

            const moreInfoBtn = document.createElement("div");
            moreInfoBtn.classList.add("more-info");
            moreInfoBtn.textContent = "More Info";

          
            actionBtnsDiv.appendChild(startLearningBtn);
            actionBtnsDiv.appendChild(moreInfoBtn);

            classinfo.appendChild(classByDiv);
            classinfo.appendChild(actionBtnsDiv);

          
            itemdiv.appendChild(classinfo);

            itemsSlider.appendChild(itemdiv);
        });
        
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });

    } catch (error) {
        console.error("Error fetching or populating data:", error);
    }
}

fetchAndPopulate();

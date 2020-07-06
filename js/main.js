// Start writing JavaScript here!

const tabs = Array.from(document.querySelectorAll('.jsBtn')),
      tabby = document.querySelector('.tabby'),
      tabContents = Array.from(tabby.querySelectorAll('.tab-content'));

tabs.forEach(tab => {

    tab.addEventListener("click", ()=> {
        const target = tab.dataset.theme
        const tabContent = tabby.querySelector("#" + target)
        console.log(tabContent);

        tabs.forEach(t => t.classList.remove('is-selected'));
        tab.classList.add('is-selected');

        tabContents.forEach(c => c.classList.remove("is-selected"));
        tabContent.classList.add('is-selected');
    })

})
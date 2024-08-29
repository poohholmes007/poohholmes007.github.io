// Initialize the instruction guide
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const toggleButton = document.getElementById('toggleButton');
    const closeButton = document.getElementById('closeButton');
    const dialogBox = document.getElementById('dialogBox');
    const content = document.getElementById('content');
    
    const steps = [
        'stockName',
        'coverage',
        'whatsnew',
    ];
    const scenes = [
        'goInstruction',
        'coverageInstruction',
        'whatsnewInstruction',
    ];

    let currentSceneIndex = 0;

    async function showNextScene() {
        const urlParams = new URLSearchParams(window.location.search);
        const language = urlParams.get('lang');
        const langData = fetchLanguageData(language);
        const step = steps[currentSceneIndex];
        const scene = scenes[currentSceneIndex];
        
        // Update content
        const title = document.getElementById('tip');
        title.textContent = langData[step];
        //title.setAttribute('data-i18n', 'step');
        //title.textContent = `${langData.step} ${currentSceneIndex + 1}`;
        const content = document.getElementById('content');
        //content.setAttribute('data-i18n', scene);
        let sceneHTML = langData[scene].replace(/\n/g, '<br>');
        content.innerHTML = sceneHTML;
        // Increment scene index
        currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    }

    toggleButton.addEventListener('click', function() {
        dialogBox.classList.add('visible');
        dialogBox.classList.remove('invisible');
        showNextScene(); // Show the first scene immediately when dialog box opens
    });

    closeButton.addEventListener('click', function() {
        dialogBox.classList.add('invisible');
        dialogBox.classList.remove('visible');
    });

    setInterval(showNextScene, 5000);
    
    if (code === 'Exchange:Ticker') {
        const stockAKA = document.getElementById('stockAKA');
        dialogBox.classList.remove('show');
    }
    /*const goButton = document.getElementById('dialogBox');
    const headerContainer = goButton.closest('.header-container');
    headerContainer.style.display = 'none';*/
});
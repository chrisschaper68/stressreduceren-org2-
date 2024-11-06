// Functie om stemming te controleren en aanbevelingen te geven
function checkMood() {
    const mood = document.getElementById("mood-select").value;
    const moodAdvice = document.getElementById("mood-advice");
    const recommendationsSection = document.getElementById("recommendations-section");

    let adviceText = "";
    let recommendations = "";

    if (mood === "ontspannen") {
        adviceText = "Fijn dat je je ontspannen voelt! Hier zijn enkele hulpmiddelen om dit vast te houden.";
        recommendations = "<ul><li>Geniet van een meditatie.</li><li>Schrijf in je dagboek wat je blij maakt.</li></ul>";
    } else if (mood === "gestrest") {
        adviceText = "Je voelt je gestrest. Probeer deze ademhalingsoefening om te ontspannen.";
        recommendations = "<ul><li>Ademhalingsoefening om je te kalmeren.</li><li>Maak een wandeling in de natuur.</li></ul>";
        document.getElementById("breathing-section").style.display = "block";
    } else if (mood === "angstig") {
        adviceText = "Voel je je angstig? Probeer deze hulpmiddelen om tot rust te komen.";
        recommendations = "<ul><li>Probeer een mindfulness-meditatie.</li><li>Maak een lijst van waar je dankbaar voor bent.</li></ul>";
        document.getElementById("gratitude-section").style.display = "block";
    } else if (mood === "moe") {
        adviceText = "Je voelt je moe. Ontspan met een ademhalingsoefening of korte meditatie.";
        recommendations = "<ul><li>Doe een korte ademhalingsoefening.</li><li>Rust uit met kalmerende muziek.</li></ul>";
        document.getElementById("music-section").style.display = "block";
    }

    moodAdvice.innerHTML = adviceText;
    document.getElementById("recommendations").innerHTML = recommendations;
    recommendationsSection.style.display = "block";
}

// Functie om de ademhalingsoefening te starten
function startBreathingExercise() {
    const breathCircle = document.getElementById("breath-circle");
    breathCircle.style.animation = "breathing 6s ease-in-out infinite";
}

// Functie om dankbaarheidsnotities op te slaan
function saveGratitude() {
    const gratitudeInput = document.getElementById("gratitude-input").value;
    const gratitudeLog = document.getElementById("gratitude-log");
    const date = new Date().toLocaleDateString();
    if (gratitudeInput.trim()) {
        gratitudeLog.innerHTML += `<p><strong>${date}:</strong> ${gratitudeInput}</p>`;
        document.getElementById("gratitude-input").value = ""; // Leegmaken van het tekstveld
    }
}

// Functie om dagboeknotities op te slaan
function saveJournalEntry() {
    const journalEntry = document.getElementById("journal-entry").value;
    const journalEntries = document.getElementById("journal-entries");
    const date = new Date().toLocaleDateString();
    if (journalEntry.trim()) {
        journalEntries.innerHTML += `<p><strong>${date}:</strong> ${journalEntry}</p>`;
        document.getElementById("journal-entry").value = ""; // Leegmaken van het tekstveld
    }
}

// Dagelijkse affirmatie instellen bij het laden van de pagina
const affirmations = [
    "Je bent sterker dan je denkt.",
    "Vandaag is een nieuw begin.",
    "Focus op wat je gelukkig maakt.",
    "Jij hebt de controle over jouw gedachten.",
    "Laat stress los, omarm rust.",
    "Je verdient rust en vrede.",
    "Alles komt op zijn tijd goed.",
    "Kies voor positiviteit, vandaag en elke dag.",
    "Laat los wat je niet kunt controleren.",
    "Ontspanning is net zo belangrijk als productiviteit."
];

function setDailyAffirmation() {
    const affirmationText = affirmations[Math.floor(Math.random() * affirmations.length)];
    document.getElementById("daily-affirmation").innerText = affirmationText;
}

document.addEventListener("DOMContentLoaded", setDailyAffirmation);

// Functie om meditatie te starten
function startMeditation() {
    const meditationAudio = document.getElementById("meditation-audio");
    meditationAudio.play();
}
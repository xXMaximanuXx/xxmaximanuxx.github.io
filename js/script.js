async function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");
    for (const el of elements) {
        const file = el.getAttribute("data-include");
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error("Datei nicht gefunden: " + file);
            el.innerHTML = await response.text();
        } catch (error) {
            console.error(error);
        }
    }
}
includeHTML();

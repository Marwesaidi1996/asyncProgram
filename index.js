async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
    }
}

// Exemple d'utilisation
iterateWithAsyncAwait(['a', 'b', 'c']);

async function awaitCall() {
    try {
        // Simulation d'un appel API avec un délai
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulez une erreur ici si nécessaire
                const success = Math.random() > 0.5; // 50% de chance de réussite
                success ? resolve("Données de l'API") : reject(new Error("Échec de l'appel API"));
            }, 1000);
        });
        console.log(response);
    } catch (error) {
        console.error("Erreur :", error.message); // Message d'erreur convivial
    }
}

// Exemple d'utilisation
awaitCall();

async function concurrentRequests() {
    const apiCall1 = () => new Promise(resolve => setTimeout(() => resolve("Résultat de l'API 1"), 1000));
    const apiCall2 = () => new Promise(resolve => setTimeout(() => resolve("Résultat de l'API 2"), 1500));

    try {
        const results = await Promise.all([apiCall1(), apiCall2()]);
        console.log("Résultats combinés :", results);
    } catch (error) {
        console.error("Erreur lors des requêtes simultanées :", error.message);
    }
}

// Exemple d'utilisation
concurrentRequests();

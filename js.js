// const h1 = document.getElementById("clock");

// const updateTime = () => {
//     const now = new Date();
//     let sec = now.getSeconds().toString().padStart(2, "0");
//     let min = now.getMinutes().toString().padStart(2, "0");
//     let hour = now.getHours().toString().padStart(2, "0");
//     h1.innerHTML = `
//                 <span>${hour}</span>:
//                 <span>${min}</span>:
//                 <span>${sec}</span>
//             `;
// };

// updateTime(); // Call the function once to update the clock immediately.
// setInterval(updateTime, 1000); // Update the clock every second.

document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.getElementById("clock");

    const updateTime = () => {
        const now = new Date();
        const sec = now.getSeconds().toString().padStart(2, "0");
        const min = now.getMinutes().toString().padStart(2, "0");
        const hour = now.getHours().toString().padStart(2, "0");
        h1.innerHTML = `
            <span>${hour}</span>:
            <span>${min}</span>:
            <span>${sec}</span>
        `;
    };

    updateTime(); // Call the function once to update the clock immediately.
    setInterval(updateTime, 1000); // Update the clock every second.
});

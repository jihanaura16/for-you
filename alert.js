// Fungsi untuk memunculkan SweetAlert dengan efek kucing dan tombol OK
document.getElementById("fireworks-btn").addEventListener("click", function () {
    Swal.fire({
        title: "To: Mas <3 Everything is gonna be okay, as long as we keep trying and believing. Life may be hard today, but tomorrow brings new hope. As long as we keep doing good, the universe will take care of the rest",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
            rgba(0,0,123,0.4)`,
     didOpen: () => {
            // Tambahkan elemen kucing GIF di atas
            const nyanCat = document.createElement("img");
            nyanCat.src = "https://sweetalert2.github.io/images/nyan-cat.gif";
            nyanCat.classList.add("floating-nyan-cat");
            document.body.appendChild(nyanCat);
            },   
        confirmButtonText: "OK"
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("Button OK clicked! Showing fireworks...");
            showFireworks();
        }
    });
});

// Fungsi untuk memunculkan efek kembang api dan teks
function showFireworks() {
    console.log("Creating fireworks container...");
    const fireworksContainer = document.createElement("div");
    fireworksContainer.classList.add("fireworks");
    document.body.appendChild(fireworksContainer);

    console.log("Adding sparks...");
    for (let i = 0; i < 50; i++) {
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.top = `${Math.random() * 100}vh`;
        spark.style.left = `${Math.random() * 100}vw`;
        spark.style.animationDelay = `${Math.random() * 0.5}s`; // Lebih acak
        fireworksContainer.appendChild(spark);

        // Hapus elemen spark setelah animasi selesai
        spark.addEventListener("animationend", () => {
            spark.remove();
        });
    }

    // Tambahkan teks "by Jihan"
    console.log("Adding text 'by jihan'...");
    const textElement = document.createElement("div");
    textElement.classList.add("fireworks-text");
    textElement.innerText = "by jihan";
    fireworksContainer.appendChild(textElement);

    // Hapus container dan teks setelah selesai
    setTimeout(() => {
        console.log("Removing fireworks container...");
        fireworksContainer.remove();
    }, 1500);
}

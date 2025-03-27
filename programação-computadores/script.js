function mostrarDetalhes(produtoId) {
    const detalhes = document.getElementById(`detalhes${produtoId}`);
    if (detalhes.style.display === "none" || detalhes.style.display === "") {
        detalhes.style.display = "block";
    } else {
        detalhes.style.display = "none";
    }
}

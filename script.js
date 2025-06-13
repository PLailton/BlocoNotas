function novo() {
        if (confirm("Apagar o conteúdo atual?")) {
            document.getElementById("texto").value = "";
        }
    }

function abrirArquivo() {
    const abrir = document.getElementById("abrir");
    const arquivo = abrir.files[0];
    if (arquivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
        document.getElementById("texto").value = e.target.result;
        };
        reader.readAsText(arquivo);
    }
}

function saveFile() {
    const text = document.getElementById("texto").value;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "novo_arquivo.txt";
    a.click();
    URL.revokeObjectURL(url);
}
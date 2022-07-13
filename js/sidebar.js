window.addEventListener("load", () => {
    var sidebarDiv = document.getElementById("sidebar-height");
    var productNavDiv = document.getElementById("product-nav");
    if (sidebarDiv.contains(productNavDiv)) {
        document.getElementById("mysidebardiv").classList.remove("with-padding");
    } else {
        document.getElementById("mysidebardiv").classList.add("with-padding");
    }

    let pdfContainer = document.getElementById("toggleContainerPdf");
    let pdfPageLink = document.getElementById("pdf-remove");
    if (pdfContainer.contains(pdfPageLink)) {
        pdfPageLink.remove();
    }
});
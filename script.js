const arrayQA = document.querySelectorAll(".qa")

arrayQA.forEach(nodeQA => nodeQA.querySelector(".question").addEventListener("click", () => handleQuestionClick(nodeQA)))

const handleQuestionClick = clickedNode => {
    if (clickedNode.className.includes("show")) {
        clickedNode.classList.remove("show")
    } else {
        arrayQA.forEach(nodeQA => nodeQA.classList.remove("show"))
        clickedNode.classList.add("show")
    }
}

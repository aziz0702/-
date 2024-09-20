let centerCount = 0;

function addCenter() {
    centerCount++;

    const centerDiv = document.createElement("div");
    centerDiv.classList.add("center-div");

    const centerLabel = document.createElement("label");
    centerLabel.textContent = `المبلغ للمركز ${centerCount}:`;
    centerDiv.appendChild(centerLabel);

    const centerInput = document.createElement("input");
    centerInput.type = "number";
    centerInput.placeholder = "أدخل المبلغ";
    centerInput.classList.add("center-input");
    centerDiv.appendChild(centerInput);

    document.getElementById("centers-container").appendChild(centerDiv);
}

function calculateTotalTax() {
    const centers = document.querySelectorAll(".center-input");
    let totalTax = 0;
    let totalAfterTax = 0;
    let resultsHTML = '';

    centers.forEach((center, index) => {
        const amount = parseFloat(center.value);

        if (isNaN(amount)) {
            resultsHTML += `<p>الرجاء إدخال مبلغ صالح للمركز ${index + 1}</p>`;
            return;
        }

        if (amount < 0) {
            resultsHTML += `<p>المبلغ الذي أدخلته للمركز ${index + 1} بالسالب. الرجاء إدخال المبلغ بدون موجب أو سالب.</p>`;
            return;
        }

        const tax = amount * 0.25;
        const amountAfterTax = amount - tax;
        totalTax += tax;
        totalAfterTax += amountAfterTax;

        resultsHTML += `<p>المركز ${index + 1}: الضريبة المأخوذة: ${tax.toFixed(2)} | المبلغ بعد الضريبة: ${amountAfterTax.toFixed(2)}</p>`;
    });

    resultsHTML += `<h3>الضريبة الإجمالية: ${totalTax.toFixed(2)}</h3>`;
    // هنا يمكن إزالة المجموع بعد الضريبة حسب طلبك السابق.

    document.getElementById("result").innerHTML = resultsHTML;
}

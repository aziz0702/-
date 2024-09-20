let centerCount = 0; // عداد المراكز المضافة

// وظيفة لإضافة مركز جديد
function addCenter() {
    centerCount++; // زيادة عدد المراكز

    // إنشاء عناصر HTML لإدخال المبلغ لكل مركز
    const container = document.getElementById('centers-container');
    const centerDiv = document.createElement('div');
    centerDiv.id = 'center-' + centerCount;
    centerDiv.style.marginBottom = '10px';

    const label = document.createElement('label');
    label.innerText = 'المبلغ لمركز ' + centerCount + ': ';
    label.style.fontSize = '18px';

    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'أدخل المبلغ';
    input.id = 'amount-' + centerCount;
    input.style.padding = '10px';
    input.style.fontSize = '16px';
    input.style.borderRadius = '5px';
    input.style.marginLeft = '10px';
    input.style.width = '100%';

    centerDiv.appendChild(label);
    centerDiv.appendChild(input);
    container.appendChild(centerDiv);
}

// وظيفة لحساب الضرائب لكل مركز
function calculateTotalTax() {
    let totalTax = 0; // الضريبة الإجمالية
    let totalAmountAfterTax = 0; // المبلغ الإجمالي بعد إضافة الضريبة
    let resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = ''; // إعادة تعيين النتائج

    for (let i = 1; i <= centerCount; i++) {
        let amount = document.getElementById('amount-' + i).value;

        // التحقق من القيمة السالبة
        if (amount < 0) {
            resultContainer.innerHTML = 'المبلغ الذي أدخلته بالسالب. الرجاء إدخال المبلغ بدون موجب أو سالب.';
            return;
        }

        // حساب الضريبة لكل مركز
        let tax = amount * 0.25;
        let amountAfterTax = parseFloat(amount) + parseFloat(tax);
        totalTax += parseFloat(tax); // إضافة الضريبة الإجمالية
        totalAmountAfterTax += amountAfterTax; // إضافة المبلغ بعد الضريبة

        // عرض نتيجة الضريبة والمبلغ بعد الضريبة لكل مركز
        let result = document.createElement('p');
        result.innerText = 'مركز ' + i + ': المبلغ بعد الضريبة = ' + amountAfterTax + ' ريال. (الضريبة: ' + tax + ' ريال)';
        result.style.fontSize = '18px';
        resultContainer.appendChild(result);
    }

    // عرض الضريبة الإجمالية والمبلغ الإجمالي بعد الضريبة
    let totalResult = document.createElement('p');
    totalResult.innerText = 'الضريبة الإجمالية: ' + totalTax + ' ريال. المبلغ الإجمالي بعد الضريبة: ' + totalAmountAfterTax + ' ريال';
    totalResult.style.fontWeight = 'bold';
    totalResult.style.fontSize = '20px';
    totalResult.style.marginTop = '20px';
    resultContainer.appendChild(totalResult);
}

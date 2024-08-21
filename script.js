function calculateTax() {
    var amount = document.getElementById('amount').value;

    // التحقق من ما إذا كان المبلغ بالسالب
    if (amount < 0) {
        document.getElementById('result').innerText = 'المبلغ الذي أدخلته بالسالب. الرجاء إدخال المبلغ بدون موجب أو سالب.';
        return;
    }

    var tax = amount * 0.25;
    document.getElementById('result').innerText = ' ( توضع هذه الضريبة في خزنة النقابة ) الضريبة: ' + tax + ' بيلي';
}

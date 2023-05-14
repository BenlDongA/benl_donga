function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var bmi = weight / ((height/100) * (height /100));
    var result = document.getElementById("result");
    
    if(bmi==0|| weight==0||height==0){
        result.innerHTML = "Hãy nhập đầy đủ các thông tin " 
    }
    else if (bmi < 18.5 && bmi>0) {
        result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br> Phân loại : Gầy " + "<br>Nguy cơ Phát triển bệnh: <b>Thấp"
    } else if (bmi >= 18.5 && bmi < 25) {
        result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br> Phân loại : Bình thường " + "<br> Nguy cơ Phát triển bệnh: <b> Trung Bình"
    } else if (bmi >= 25 && bmi < 30) {
        result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br> Phân loại : Hơi béo " + "<br> Nguy cơ Phát triển bệnh: <b> Cao"
    } else if (bmi >= 30 && bmi < 35) {
        result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br> Phân loại : Béo phì cấp độ 1  " + "<br> Nguy cơ Phát triển bệnh: <b> Cao"
    } else if (bmi >= 35 && bmi < 40) {
        result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br> Phân loại : Béo phì cấp độ 2  " + "<br> Nguy cơ Phát triển bệnh: <b>Rất cao"
    } else if(bmi >40){
        result.innerHTML = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "<br> Phân loại : Béo phì cấp độ 3  " + "<br> Nguy cơ Phát triển bệnh: <b>Nguy hiểm"
        
    }
}
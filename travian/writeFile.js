// пробуем сделать, чтоб по клику создавала файл текстовый
// Создание файла
//fs.writeFileSync('путь/к/файлу', 'Контент файла');
/*function fileHandler(){
    const fs = require.fs('fs');
    //fs.writeFileSync('/111.txt', 'Контент файла');
    fs.writeFileSync('C:\Users\141\travian', 'Контент файла');
    var fileData = new Blob(["Пример текста для файла"], { type: "text/plain" });
        var fileURL = URL.createObjectURL(fileData);
        
        var fileWriter = new fileWriter();
        
        fileWriter.open(fileURL);
        fileWriter.write(fileData);
        fileWriter.close();
}*/

function writeFile(fileName, content) {
    window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024, function (fs) {
        fs.root.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
                var blob = new Blob([content], { type: 'text/plain' });

                fileWriter.write(blob);

                console.log('Запись в файл завершена.');
            });
        });
    });
}

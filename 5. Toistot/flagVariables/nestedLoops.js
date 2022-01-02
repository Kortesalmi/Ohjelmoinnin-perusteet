document.write('<h1>Testataan sisäkkäisiä looppeja</h1>');
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        document.write('(' + i + '.' + j + ')');
    }
    document.write('<br/>')
}
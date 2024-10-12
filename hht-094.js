var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814280/random-pics-280.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814280_random-pics-280.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814281/random-pics-281.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814281_random-pics-281.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814282/random-pics-282.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814282_random-pics-282.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
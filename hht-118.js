var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814353/random-pics-352.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814353_random-pics-352.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814354/random-pics-353.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814354_random-pics-353.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814355/random-pics-354.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814355_random-pics-354.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
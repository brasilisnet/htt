var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814350/random-pics-349.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814350_random-pics-349.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814351/random-pics-350.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814351_random-pics-350.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814352/random-pics-351.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814352_random-pics-351.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
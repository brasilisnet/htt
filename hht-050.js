var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814148/random-pics-148.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814148_random-pics-148.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814149/random-pics-149.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814149_random-pics-149.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814150/random-pics-150.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814150_random-pics-150.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
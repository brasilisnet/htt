var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814286/random-pics-286.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814286_random-pics-286.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814287/random-pics-287.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814287_random-pics-287.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://www.turboimagehost.com/p/105814288/random-pics-288.jpg.html'><img class='top' border='0' src='https://s8d1.turboimg.net/t1/105814288_random-pics-288.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
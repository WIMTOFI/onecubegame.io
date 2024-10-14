image_array = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png', ];

    

function get_random_image(){

    random_index = Math.floor(Math.random()* image_array.length);
    selected_image = image_array[random_index]
    //document.getElementById('imageYellow').src = `./images/yellow/${selected_image}`
    //document.getElementById('imageRed').src = `./images/red/${selected_image}`
    document.getElementById('all_cube').src = `./images/all_cube/${selected_image}`
    
}

function changeImageBtn() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "pic_bulboff.gif";
    } else {
      image.src = "pic_bulbon.gif";
    }
  }

  
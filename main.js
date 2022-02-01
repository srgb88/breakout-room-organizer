const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll(".list, .pubList, .list-down");

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(function () {
            item.style.display = 'none';
        }, 0);
    });

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    })

    for (let j = 0; j < lists.length; j ++) {
        const list = lists[j];

        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgb(0, 0, 0, 0.2)';
        });
        list.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
        })
        list.addEventListener('drop', function (e) {
            console.log('drag');
            this.append(draggedItem);
            this.style.backgroundColor = 'rgb(0, 0, 0, 0.1)';
        
        });
    }
}

document.querySelector('button').addEventListener('click', function() {
    html2canvas(document.querySelector('.app'), {
      onrendered: function(canvas) {
        // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas);
      }
    });
  });

  function searchPub() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchBox');
    filter = input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByClassName('list-item');
  
    for (i = 0; i < li.length; i++) {
      a = li[i];
      txtValue = a.textContent || a.innerText;
      if (txtValue.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

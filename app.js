

var getData = {
    el: {
        src: "./data.json",
        elem: "app"
    },
    parameters: {
        //sunucunuzdaki .json dosyasına istek atarke GET api'ye istek atarken POST
        rMethod: "GET",
        rHeaders: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    },
    request: function () {
        var _t = this;
        fetch(_t.el.src, {
            method: _t.parameters.rMethod,
            headers: _t.parameters.rHeaders
        }).then(response => {
            return response.json();
        }).then(data => {
            _t.innerData(data);
        }).catch(err => {
            console.log(err);
        })
    },
    innerData: function (items) {
        var _t = this;
        let innerArea = document.getElementById(_t.el.elem);
        for (i = 0; i < items.length; i++) {
            let comp = `<p>${items[i].title}</p>`;
            innerArea.innerHTML += comp;
        }
    },
    init: function () {
        var _t = this;
        _t.request();
    }
}
getData.init();
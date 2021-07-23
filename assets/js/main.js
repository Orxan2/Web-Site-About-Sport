window.addEventListener('load', function (params) {
    const wrapper = this.document.querySelector('ul.slogan-wrapper');
    const slide = this.document.querySelector('li.slogan');
    const btnPrevious = this.document.querySelector('#previous');
    const btnNext = this.document.querySelector('#next');
    const sitationWidth = slide.clientWidth;

 let count=1;

    let myLeft = 0;
    
    
    btnPrevious.addEventListener('click', GoPrevious);
    btnNext.addEventListener('click', GoNext);

    function GoNext(e) {
        e.preventDefault();
       count++;
        if (count==4) {
            count=3;
            return;
        }
        myLeft -= sitationWidth;
            wrapper.style.left = `${myLeft}px`;      
        }
        function GoPrevious(e) {
            e.preventDefault();
           count--;
            if (count==0) {
                count=1;
                return;
            }
            myLeft += sitationWidth;
                wrapper.style.left = `${myLeft}px`;      
            }
});


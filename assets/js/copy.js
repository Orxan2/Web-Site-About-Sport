window.addEventListener('load', function (params) {
    const wrapper = this.document.querySelector('ul.slogan-wrapper');
    const slide = this.document.querySelector('li.slogan');
    const btnPrevious = this.document.querySelector('#previous');
    const sitationWidth = slide.clientWidth;

    function CreateSlider(params) {
        let slogan = document.createElement('li');
        let sitation = document.createElement('p');
        let human = document.createElement('small');

        slogan.classList.add('slogan');
        slogan.appendChild(sitation);
        slogan.appendChild(human);

        return slogan;
    }

    let myLeft = 0;
    let count = 1;
    let sliderElements = {
        first: {
            word: `"I'm a testimonial. Click to edit me and add text that says something nice about you and your services."`,
            human: 'Victoria Watts'
        },
        second: {
            word: `“I'm a testimonial. Click to edit me and add text that says something nice about you
            and your services. Let your customers review you and tell their friends how great
            you are.”`,
            human: 'Coach Evan'
        },
        third: {
            word: `“I'm a testimonial. Click to edit me and add text that says something nice about you
            and your services.”`,
            human: 'James Reid'
        }
    }
    btnPrevious.addEventListener('click', Orxan);

    function Orxan(e) {
        e.preventDefault();
        // count++;
        // let slogan = document.createElement('li');
        // let sitation = document.createElement('p');
        // let human = document.createElement('small');
        // slogan.classList.add('slogan');
        // slogan.appendChild(sitation);
        // slogan.appendChild(human);

        // let previousSlide = this.document.querySelector('li.slogan');
        // switch (count % 3) {
        //     case 1:
        //         {
        //             sitation.innerText = sliderElements.first.word;
        //             human.innerText = sliderElements.first.human;
        //             wrapper.append(slogan);
        //             wrapper.style.left=`0px`;

        //             // wrapper.remove(previousSlide);
        //             break;
        //         }
        //     case 2:
        //         {
        //             sitation.innerText = sliderElements.second.word;
        //             human.innerText = sliderElements.second.human;
        //             wrapper.append(slogan);
        //             // wrapper.remove(previousSlide);
        //             break;
        //         }
        //     default:
        //         {
        //             sitation.innerText = sliderElements.third.word;
        //             human.innerText = sliderElements.third.human;
        //             wrapper.append(slogan);
        //             // wrapper.remove(previousSlide);
        //             break;
        //         }
        // }
        myLeft -= sitationWidth;
            wrapper.style.left = `${myLeft}px`;
        setTimeout(() => {
            
            // let prev = slogan.previousElementSibling;
            // console.log(prev);
           
            // wrapper.removeChild(prev);
            // wrapper.style.left=`0px`;
        }, 1000);
        
    }
});


import { Card, CardBody, CardImg} from 'reactstrap';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faShuffle} from '@fortawesome/free-solid-svg-icons'
const arrowRight = <FontAwesomeIcon className='icon' icon={faArrowRight} />
const arrowLeft = <FontAwesomeIcon className='icon' icon={faArrowLeft} />
const shuffleIcon = <FontAwesomeIcon className='icon' icon={faShuffle} />

function CardWithPictures(props){

    const [counter, setCounter] = useState(0);
    const [content, setContent] = useState(props.words.imgs[counter]);

    const shuffleArray = () => {
        for (let i = props.words.imgs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = props.words.imgs[i];
          props.words.imgs[i] = props.words.imgs[j];
          props.words.imgs[j] = temp;
          const temp2 = props.words.answears[i];
          props.words.answears[i] = props.words.answears[j];
          props.words.answears[j] = temp2;
        }
        let whitening = document.getElementsByClassName('variant');
        let id = 'congrats-' + props.words.topic.toLowerCase();
        let congrats = document.getElementById(id);
        congrats.innerHTML = '';
        for (let i = 0; i < whitening.length; i++){
            whitening[i].style.color = 'aliceblue';
        }
        setContent(props.words.imgs[counter]);
    };

    /* function shuffle() {
        props.words.sort((a, b) => 0.5 - Math.random());
        console.log(props.words);
        if (check === true) {
            setContent(props.words[counter].eng);
        } else {
            setContent(props.words[counter].ukr);
        }
    } */

    const minusHandler = () => {
        let minus;
        let whitening = document.getElementsByClassName('variant');
        let id = 'congrats-' + props.words.topic.toLowerCase();
        let congrats = document.getElementById(id);
        congrats.innerHTML = '';
        for (let i = 0; i < whitening.length; i++){
            whitening[i].style.color = 'aliceblue';
        }
        if(counter > 0){
            minus = counter-1;
            setCounter(minus);
            setContent(props.words.imgs[minus]);
        } else {
            minus = props.words.imgs.length-1;
            setCounter(minus);
            setContent(props.words.imgs[minus]);
        }
    };

    const plusHandler = () => {
        let plus;
        let whitening = document.getElementsByClassName('variant');
        let id = 'congrats-' + props.words.topic.toLowerCase();
        let congrats = document.getElementById(id);
        congrats.innerHTML = '';
        for (let i = 0; i < whitening.length; i++){
            whitening[i].style.color = 'aliceblue';
        }
        if(counter < props.words.imgs.length-1){
            plus = counter+1;
            setCounter(plus);
            console.log(plus);
            setContent(props.words.imgs[plus]);
        } else {
            plus = 0;
            setCounter(plus);
            setContent(props.words.imgs[plus]);
        }
    };

/*     const clickHandler = () => {
        setCheck(!check);
        if (check === false) {
            setContent(props.words.words[counter].eng);
        } else {
            setContent(props.words.words[counter].ukr);
        }
    }; */

    const lessonsBar = (id) => {
        console.log(id);
        let myEl = document.getElementById(id);
        myEl.classList.toggle('hidden');
        console.log(myEl);
    };
    
    const colorChanger = (e) => {
        let id = 'congrats-' + props.words.topic.toLowerCase();
        let congrats = document.getElementById(id);
        let whitening = document.getElementsByClassName('variant');
        for (let i = 0; i < whitening.length; i++){
            whitening[i].style.color = 'aliceblue';
        }
        if(e.target.innerHTML === props.words.answears[counter]){
            e.target.style.color = 'green';
            congrats.innerHTML = 'Correct!';
            congrats.style.color = 'green';
        } 
        else{
            e.target.style.color = 'red';
            congrats.innerHTML = 'Try Another';
            congrats.style.color = 'red';
        }
    };

    return (
        <div className='parent'>
            <div>
                <h2 className={'lesson'+props.counter + ' lesson-next'} onClick={() => lessonsBar(props.words.topic.toLowerCase())}><span className='toggler'>{props.words.topic}</span></h2>
            </div>
            <div className='center-card child hidden' id={props.words.topic.toLowerCase()}>
                <Row xs='12' className='justify-content-center text-center'>
                    <Col md='2'></Col>
                    <Col md='1' xs='2' className='my-auto'><div className='arrow' onClick={minusHandler}>{arrowLeft}</div></Col>
                    <Col md='6' xs='6' className='align-items-center'>
                        <Card className='my-card'>
                            <CardBody className='card-img-body'>
                                <CardImg src={content} style={{ height: '100%', width: '100%'}}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='1' xs='2' className='align-items-center my-auto'><div className='arrow' onClick={plusHandler}>{arrowRight}</div></Col>
                    <Col md='2'></Col>
                </Row>
                <Row>
                    <Col md='5' xs='4'></Col>
                    <Col md='2' xs='4' className='align-items-center justify-content-center text-center'><div className='shuffle sort-button' onClick={shuffleArray}>{shuffleIcon}</div></Col>
                    <Col md='5' xs='4'></Col>
                </Row>
                <div>
                    <h2 className='question'>{props.words.question}</h2>
                </div>
                <Row>
                    <Col md='2' xs='2'></Col>
                    <Col md='4' xs='4' className='align-items-center justify-content-center text-center my-auto'><div className='shuffle variant' onClick={colorChanger}>{props.variants[0]}</div></Col>
                    <Col md='4' xs='4' className='align-items-center justify-content-center text-center'><div className='shuffle variant' onClick={colorChanger}>{props.variants[1]}</div></Col>
                    <Col md='2' xs='2'></Col>
                </Row>
                <Row>
                    <Col md='2' xs='2'></Col>
                    <Col md='4' xs='4' className='align-items-center justify-content-center text-center my-auto'><div className='shuffle variant' onClick={colorChanger}>{props.variants[2]}</div></Col>
                    <Col md='4' xs='4' className='align-items-center justify-content-center text-center'><div className='shuffle variant' onClick={colorChanger}>{props.variants[3]}</div></Col>
                    <Col md='2' xs='2'></Col>
                </Row>
                <div>
                    <h2 id={'congrats-' + props.words.topic.toLowerCase()}></h2>
                </div>
                <hr className='bottom-line'/>
            </div>
        </div>
    );
}

export default CardWithPictures;
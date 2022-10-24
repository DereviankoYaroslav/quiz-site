import { Card, CardBody, CardTitle } from 'reactstrap';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faShuffle} from '@fortawesome/free-solid-svg-icons'
const arrowRight = <FontAwesomeIcon className='icon' icon={faArrowRight} />
const arrowLeft = <FontAwesomeIcon className='icon' icon={faArrowLeft} />
const shuffleIcon = <FontAwesomeIcon className='icon' icon={faShuffle} />

function CardComponent(props){

    const [counter, setCounter] = useState(0);
    const [content, setContent] = useState(props.words.words[counter].eng);
    const [check, setCheck] = useState(true);

    const shuffleArray = () => {
        for (let i = props.words.words.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = props.words.words[i];
          props.words.words[i] = props.words.words[j];
          props.words.words[j] = temp;
        }
        console.log(props.words.words);
        if (check === true) {
            setContent(props.words.words[counter].eng);
        } else {
            setContent(props.words.words[counter].ukr);
        }
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
        if(counter > 0){
            minus = counter-1;
            setCounter(minus);
            if (check === true) {
                setContent(props.words.words[minus].eng);
            } else {
                setContent(props.words.words[minus].ukr);
            }
        } else {
            minus = props.words.words.length-1;
            setCounter(minus);
            if (check === true) {
                setContent(props.words.words[minus].eng);
            } else {
                setContent(props.words.words[minus].ukr);
            }
        }
    };

    const plusHandler = () => {
        let plus;
        if(counter < props.words.words.length-1){
            plus = counter+1;
            setCounter(plus);
            console.log(plus);
            console.log(check);
            if (check === true) {
                setContent(props.words.words[plus].eng);
            } else {
                setContent(props.words.words[plus].ukr);
            }
        } else {
            plus = 0;
            setCounter(plus);
            if (check === true) {
                setContent(props.words.words[plus].eng);
            } else {
                setContent(props.words.words[plus].ukr);
            }
        }
    };

    const clickHandler = () => {
        setCheck(!check);
        if (check === false) {
            setContent(props.words[counter].eng);
        } else {
            setContent(props.words[counter].ukr);
        }
    };

    const lessonsBar = (id) => {
        console.log(id);
        let myEl = document.getElementById(id);
        myEl.classList.toggle('hidden');
        console.log(myEl);
    };

    return (
        <div className='parent'>
            <div>
                <h2 className={'lesson'+props.words.lesson + ' lesson-next'} onClick={() => lessonsBar(props.words.lesson)}>Lesson {props.words.lesson}</h2>
            </div>
            <div className='center-card child hidden' id={props.words.lesson}>
                <Row xs='12' className='justify-content-center text-center'>
                    <Col md='2'></Col>
                    <Col md='1' xs='2' className='my-auto'><div className='arrow' onClick={minusHandler}>{arrowLeft}</div></Col>
                    <Col md='6' xs='6' className='align-items-center'>
                        <Card className='my-card' onClick={clickHandler}>
                            <CardBody className='card-body'>
                                <CardTitle tag='h2' className='card-content'>{content}</CardTitle>
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
            </div>
        </div>
    );
}

export default CardComponent;
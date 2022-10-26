import CardWithPictures from "./CardWithPictures"

function PictureTestComponent(){

  document.body.style.backgroundImage = 'none';

    const wordsToLearn1 = {
      topic: 'Weather',
      imgs: [
        'https://images.unsplash.com/photo-1623567932970-576132e5d056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80',
        'https://images.unsplash.com/12/sun-trees.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1340&q=80',
        'https://images.unsplash.com/photo-1583755689194-210010d31d21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1491824989090-cc2d0b57eb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1418&q=80',

      ],
      answears: [
        'Rainy',
        'Sunny',
        'Cloudy',
        'Foggy'
      ],
      question: 'The weather is ...'
    };

    const variants1 = [
        'Rainy', 
        'Foggy', 
        'Sunny', 
        'Cloudy',
        'Bad',
        'Good',
        'Snow',
        'Cold',
        'Hot'
    ];

    const wordsToLearn2 = {
        topic: 'Animals',
        imgs: [
          'https://images.unsplash.com/photo-1571775300229-7e84bff45eae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1533651180995-3b8dcd33e834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          'https://images.unsplash.com/photo-1543782248-03e2c5a93e18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  
        ],
        answears: [
          'Fox',
          'Squirrel',
          'Deer',
          'Bear'
        ],
        question: 'What animal is it?'
      };
  
      const variants2 = [
          'Wolf', 
          'Tiger', 
          'Fox', 
          'Elk',
          'Deer',
          'Bear',
          'Squirrel',
          'Rabbit'
      ];
      
    let counter = 0;


    return(
        <div>
        <CardWithPictures words={wordsToLearn1} counter={counter=counter+1} variants={variants1}/>
        <CardWithPictures words={wordsToLearn2} counter={counter=counter+1} variants={variants2}/>
        </div>
    );
}

export default PictureTestComponent
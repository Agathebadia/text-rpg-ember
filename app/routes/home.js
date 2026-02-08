import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
async model() {
        return {
          story: [
            {
    id: 1,
    text: 'Today is a great day! It is the start of your journey to the Castle of wonders! As a young knight developer, you will need courage, determination, and support to obtain your first role as a knight, in the Castle of wonders. But first, you need to prepare before your adventure.',
    options: [
      {
        text: 'Go to a Tech Event',
        setState: { feedback: false },
        nextText: 2,
      },
      {
        text: 'Apply for a job',
        setState: { mentor: false },
        nextText: 6,
      }
    ]
  },
          ]
        }
      }

}

// Each node needs to include id, text, options,
// Each options need to include text, setState, nextState
// setState have syntax such as setState: { mentor: false },
//https://github.com/Agathebadia/text-rpg/blob/master/game.js
